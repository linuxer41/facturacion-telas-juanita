<script lang="ts">
	import Modal from '$lib/components/common/Modal.svelte';
	import DetalleFacturaModal from '$lib/components/modals/DetalleFacturaModal.svelte';
	import { getIcon } from '$lib/core/icons';
	import {
		clienteService,
		facturacionPrepararFacturaService,
		facturaService,
		productoService
	} from '$lib/core/services';
	import { eventoSignificativo, facturacionManual, snackBar, storeCart, storeCarts } from '$lib/core/store';
	import { debounce, formatCurrency } from '$lib/core/utils';

	import DocumentRenderer from '$lib/components/common/DocumentRenderer.svelte';
	import InfinitySpinner from '$lib/components/common/InfinitySpinner.svelte';
	import InvoiceDocument from '$lib/components/documents/InvoiceDocument.svelte';
	import {
		emptyCart,
		enviarFactura,
		cartsHistoryUpdate,
		updateAllCart,
		addToCart
	} from '$lib/core/api_tools';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import QuotationDocument from '../documents/QuotationDocument.svelte';
	import { parse } from 'date-fns';
	import SearchProductsModal from '../modals/SearchProductsModal.svelte';
	import { SETTINGS } from '$lib/core/config';
	export let focusedItem: CartItem;
	export let isContingencia = false;
	export let cart: Cart = emptyCart();
	const dispatch = createEventDispatcher();

	let loading: 'factura' | 'cotizacion';
	let numeroFactura: string;
	let fechaEmision: string;

	const searchcliente = debounce(async (e) => {
		const nit = e.target.value;
		if (!nit) {
			return;
		}
		cart.codigoTipoDocumentoIdentidad = optenerCodigoTipoDocumentoItentidad(nit || '99001');
		const response = await clienteService.query({
			exactNit: nit,
			page: 1,
			limit: 10
		});
		if (response.ok) {
			const data = await response.json();
			if (data?.data?.length > 0) {
				let first: Cliente = data.data[0];
				if (first) {
					cart.cliente = first;
					cart.codigoTipoDocumentoIdentidad = optenerCodigoTipoDocumentoItentidad(
						first.nit || '99001'
					);
				}
			} else {
				cart.cliente = {
					nit: nit,
					nombre: null,
					direccion: null,
					telefono: null,
					email: null
				} as any;
			}
			cart = { ...cart };
		}
	}, 500);

	let showSelectProduct = false;
	let showDetalleFactura = false;

	let toRenderDocument: Factura;
	let toRenderCotizacion: Cart;

	let products: Producto[] = [];

	async function _load() {
		try {
			const response = await productoService.query();
			if (response.ok) {
				const json = await response.json();
				products = json?.data || [];
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.error(error);
		}
	}

	function optenerCodigoTipoDocumentoItentidad(nit: string) {
		if (!nit) {
			return 1;
		}
		const doc = nit.split('-')[0];
		if (doc.length > 9) {
			return 5;
		} else if (doc.length < 7) {
			return 4;
		} else {
			return 1;
		}
	}

	function removeFromCart(product: Producto) {
		const index = cart.items.findIndex((item) => item.productId === product.id);
		if (index !== -1) {
			cart.items.splice(index, 1);
			cart = { ...cart };
		}
		cart = updateAllCart(cart);
	}

	function handleQuantityChange(item: CartItem, quantity: number) {
		const product = item.product;
		const _item = cart.items.find((item) => item.productId === product.id);
		if (_item && quantity > 0) {
			_item.quantity = quantity;
			_item.subtotal = _item.quantity * _item.price - _item.discount;
		}
		cart = updateAllCart(cart);
		focusedItem = item;
	}

	function handleDiscountChange(item: CartItem, discount: number) {
		const product = item.product;
		const _item = cart.items.find((item) => item.productId === product.id);
		if (_item && discount >= 0) {
			_item.discount = discount;
			_item.subtotal = _item.quantity * _item.price - _item.discount;
			cart = updateAllCart(cart);
			focusedItem = _item;
		}
	}

	function handlePriceChange(item: CartItem, price: number) {
		const product = item.product;
		console.log({ price });
		const _item = cart.items.find((item) => item.productId === product.id);
		if (_item && price > 0) {
			_item.price = price;
			_item.subtotal = _item.quantity * _item.price - _item.discount;
			cart = updateAllCart(cart);
			focusedItem = _item;
		}
	}

	async function onInvoiceReady(e: CustomEvent) {
		if (window.electron) {
			try {
				const pdfBuffer = await window.electron.invoke('generatePdf', {
					html: e.detail,
					name: 'factura.pdf',
					paper: {
						width: 80,
						height: 0
					},
					silent: false
				});
				// arraybuffer to base64
				const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
				const url = URL.createObjectURL(blob);
				// const newWindow = window.open(url, '_blank');
				// // newWindow.print()
				// if(newWindow) {
				// 	newWindow.addEventListener('load', async () => {
				// 		console.log('loaded', window.electron);
				// 		if(window.electron){
				// 			setTimeout(async() => {
	
				// 				await window.electron.invoke('printChildWindow', {
				// 					silent: false
				// 				});
				// 			// newWindow.print();
				// 			}, 10000);
				// 		}
				// 		// newWindow.close()
				// 	});
				// }
				// newWindow.close()
				var iframe = document.createElement('iframe');
				document.body.appendChild(iframe);
				iframe.style.display = 'none';
				iframe.onload = function() {
					setTimeout(function() {
						iframe.focus();
						iframe.contentWindow.print();
						setTimeout(function() {
							document.body.removeChild(iframe);
						}, 1000 * 60 * 15);

					}, 0);
					
				};
				iframe.src = url;
				const form = new FormData()
				form.append('file', blob, `factura_${toRenderDocument?.json?.cabecera?.numeroFactura || 1}_${toRenderDocument.cuf}.pdf`)
				const _response = await fetch(`${SETTINGS.apiUrl}/v1/files/invoice/upload`, {
					method: 'POST',
					body: form
				})
				if (!_response.ok) {
					throw new Error("Error al subir el archivo");
					
				}
				const _json = await _response.json()
				const pdfUrl = _json[0].path
				const facturaResponse = await facturaService.patch(toRenderDocument.id, {
					pdf: pdfUrl
				})
				if (!facturaResponse.ok) {
					throw new Error("Error al actualizar la factura");
				}
				const response = await facturacionPrepararFacturaService.enviarEmailFactura({
					idFactura: toRenderDocument.id,
					email: cart?.cliente?.email || ''
				});
				toRenderDocument = null;
			} catch (error) {
				console.log(error);
			}
		}
	}
	async function onQuotationReady(e: CustomEvent) {
		if (window.electron) {
			try {
				console.log(e.detail);
				await window.electron.invoke('print', {
					html: e.detail,
					name: 'cotizacion.pdf',
					paper: {
						width: 80,
						height: 0
					},
					silent: false
				});
				toRenderCotizacion = null;
			} catch (error) {
				console.log(error);
			}
		}
	}
	async function procesarFactura() {
		try {
			for (const item of cart?.items || []) {
				if (item.discount >= item.quantity * item.price) {
					snackBar.show('El descuento no puede ser mayor o igual al subtotal');
					return;
				}
			}
			if(cart.montoTotal<=0){
				snackBar.show('El monto total debe ser mayor a 0');
				return;
			}
			if (!cart?.items?.length) {
				snackBar.show('No hay productos en el carrito');
				return;
			}
			if ($eventoSignificativo && !isContingencia && $facturacionManual) {
				snackBar.show('No se puede facturar durante un evento significativo');
				return;
			}
			loading = 'factura';

			const factura =
				isContingencia && $facturacionManual
					? await enviarFactura(cart, new Date(fechaEmision), Number(numeroFactura))
					: await enviarFactura(cart, new Date());
			console.log({valid:isContingencia && $facturacionManual, fechaEmision});
			snackBar.show('Factura enviada correctamente. tipo de Emision: ' + factura.tipoEmision);
			dispatch('factura', factura);
			cart = emptyCart();
			toRenderDocument = factura;
		} catch (error) {
			console.error(error);
			snackBar.show((error as Error).message);
		} finally {
			loading = null;
		}
	}
	async function procesarCotizacion() {
		try {
			if (!cart?.items?.length) {
				snackBar.show('No hay productos en el carrito');
				return;
			}
			loading = 'cotizacion';
			toRenderCotizacion = cart;
			cart = emptyCart();
		} catch (error) {
			console.error(error);
			snackBar.show((error as Error).message);
		} finally {
			loading = null;
		}
	}
	async function guardarCart() {
		if (!cart?.items?.length) {
			snackBar.show('No hay productos en el carrito');
			return;
		}
		cartsHistoryUpdate(cart);
		cart = emptyCart();
	}
	function fakeMsg(message) {
		snackBar.show(message);
	}
	onMount(async () => {
		const _storeCart = $storeCart
		if (_storeCart) {
			cart = _storeCart;
		}
		const inputs = document.querySelectorAll('input:not([type="submit"]):not([type="email"]):not([type="password"])');
		// document.querySelector('input')?.addEventListener('input', function (event) {
		// 	event.target.value = event.target.value.toLocaleUpperCase();
		// });
		inputs?.forEach((input) => {
			input.addEventListener('input', function (event) {
				event.target.value = event.target.value.toLocaleUpperCase();
			});
		});
		await _load();
		// if (products.length > 0) {
		// 	const toCard = products[0];
		// 	addToCart(toCard);
		// 	cart = { ...cart };
		// }
	});
	onDestroy(() => {
		// if (window.electron) {
		// 	window.electron.invoke('closeWindow');
		// }
		if (cart) {
			storeCart.sync(cart)
		}
	});
</script>

<div class="board">
	<div class="tableContainer">
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>Detalle</th>
						<th>Cantidad</th>
						<th>Precio Unit.</th>
						<th>Descuento</th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{#each cart.items || [] as item}
						<tr
							on:mouseenter={() => (focusedItem = item)}
							on:focus={() => (focusedItem = item)}
							tabindex="0"
							class:focused={focusedItem === item}
						>
							<td style="width: 30%;">
								<span>
									{item.name}
								</span>
							</td>
							<td style="width: 10%;">
								<input
									type="number"
									value={item.quantity}
									on:input={(e) => handleQuantityChange(item, Number(e.currentTarget.value))}
								/>
							</td>
							<td style="width: 20%;">
								<input
									type="number"
									value={item.price}
									on:input={(e) => handlePriceChange(item, Number(e.currentTarget.value))}
								/>
							</td>

							<td style="width: 20%;">
								<input
									type="number"
									value={item.discount}
									min="1"
									on:input={(e) => handleDiscountChange(item, Number(e.currentTarget.value))}
								/>
							</td>
							<td style="width: 10%;">
								<b>
									{formatCurrency(item.subtotal)}
								</b>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="buttons">
			<button
				class="error-background"
				on:click={() => {
					cart = emptyCart();
					//@ts-ignore
					focusedItem = undefined;
				}}
			>
				Limpiar
			</button>
			<!-- add -->
			<button
				class="success-background"
				on:click={() => {
					showSelectProduct = true;
				}}
			>
				Agregar
			</button>
		</div>
	</div>
	<div class="totalsContainer">
		<table>
			<tr class="totals">
				<td>
					<h4>Subtotal:</h4>
				</td>
				<td>
					<h4>
						{formatCurrency(cart.subTotal)}
					</h4>
				</td>
			</tr>
			<tr class="totals">
				<td>
					<h4>Descuento Adicional:</h4>
				</td>
				<td>
					<h4>
						{formatCurrency(cart.descuentoAdicional)}
					</h4>
				</td>
			</tr>
			<tr class="totals">
				<td>
					<h4>Total:</h4>
				</td>
				<td>
					<h4>
						{formatCurrency(cart.montoTotal)}
					</h4>
				</td>
			</tr>
			<tr class="totals">
				<td>
					<h4>Gift card:</h4>
				</td>
				<td>
					<h4>
						{formatCurrency(cart.montoGiftCard)}
					</h4>
				</td>
			</tr>
			{#if isContingencia}
				<tr class="totals">
					<td>
						<h4>Total a pagar:</h4>
					</td>
					<td>
						<h4>
							{formatCurrency(cart.montoTotalSujetoIva)}
						</h4>
					</td>
				</tr>
			{:else}
				<tr class="totals">
					<td>
						<h1>Total a pagar:</h1>
					</td>
					<td>
						<h1>
							{formatCurrency(cart.montoTotalSujetoIva)}
						</h1>
					</td>
				</tr>
			{/if}
		</table>

		<div class="inputs">
			{#if isContingencia && $facturacionManual}
				<label for="numero">
					Numero
					<input type="text" bind:value={numeroFactura} />
				</label>
				<label for="fecha">
					Fecha emision
					<input type="datetime-local" bind:value={fechaEmision} />
				</label>
			{/if}
			<label for="nit">
				Nit/CI:
				<input type="text" bind:value={cart.cliente.nit} on:keyup={searchcliente} />
			</label>
			<label for="cliente">
				Cliente:
				<input type="text" bind:value={cart.cliente.name} />
			</label>
			<label for="mail">
				Correo:
				<input type="mail" bind:value={cart.cliente.email} />
			</label>
		</div>
		<div class="tools">
			<i class="icon" on:click={() => (showDetalleFactura = true)}>
				{@html getIcon({ name: 'Settings' }).filled}
			</i>
			<div class="buttons">
				<button class="secondary" on:click={procesarFactura}>
					{#if loading === 'factura'}
						<InfinitySpinner size={16} color="white" />
					{:else}
						Facturar
					{/if}
				</button>
				{#if !isContingencia}
					<button class="secondary" on:click={procesarCotizacion}>Cotizar</button>
					<button class="secondary" on:click={guardarCart}> Guardar </button>
				{/if}
			</div>
		</div>
	</div>
</div>

{#if showSelectProduct}
<SearchProductsModal on:close={() => (showSelectProduct = false)} on:select={(e)=>{
	cart = addToCart(e.detail, cart); showSelectProduct = false;
	}} />
{/if}


{#if showDetalleFactura}
	<DetalleFacturaModal
		{cart}
		on:close={() => (showDetalleFactura = false)}
		on:confirm={(e) => {
			showDetalleFactura = false;
			cart = e.detail;
		}}
	/>
{/if}
{#if toRenderDocument}
	<DocumentRenderer>
		<InvoiceDocument
			on:ready={onInvoiceReady}
			data={toRenderDocument.json}
			isOnline={['EN LINEA', 'MASIVO'].includes(toRenderDocument.tipoEmision)}
			presentation="roll"
		/>
	</DocumentRenderer>
{/if}
{#if toRenderCotizacion}
	<DocumentRenderer>
		<QuotationDocument on:ready={onQuotationReady} data={toRenderCotizacion} presentation="roll" />
	</DocumentRenderer>
{/if}

<style lang="scss">
	.board {
		display: grid;
		grid-template-rows: 1fr auto;
		gap: 0.5rem;
		height: 100%;
		padding: 0.5rem;
		overflow: hidden;
		.tableContainer {
			display: grid;
			grid-template-rows: 1fr auto;
			gap: 0.5rem;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: var(--box-shadow-main);
			min-height: 10rem;

			.table {
				overflow: auto;
				height: 100%;
				width: 100%;
				// overflow: auto;
			}
		}

		.tools {
			display: grid;
			gap: 0.5rem;
			grid-template-columns: auto 1fr;
		}
		.buttons {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(auto-fit, 100px);
			gap: 0.5rem;
			place-content: end;
			padding: 0.2rem;
		}
		button {
			padding: 0.5rem 1rem;
			text-decoration: none;
			box-shadow: var(--box-shadow-main);
			width: 100%;
			border-radius: 20px;
			text-align: center;
			color: white;
			font-size: larger;
		}

		.totalsContainer {
			display: grid;
			gap: 0.5rem;
			.totals {
				&:hover {
					background-color: white !important;
				}
				& td:last-child {
					* {
						text-align: right;
					}
					text-align: right;
				}
				* {
					padding: 0.1rem !important;
				}
			}
		}
		.inputs {
			display: grid;
			gap: 0.2rem;
			grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		}

		.focused {
			background-color: rgb(212, 250, 192);
		}
	}
</style>
