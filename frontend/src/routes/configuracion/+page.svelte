<script lang="ts">
	import { goto } from '$app/navigation';
	import InfinitySpinner from '$lib/components/common/InfinitySpinner.svelte';
	import Modal from '$lib/components/common/Modal.svelte';
	import { loadCufd, loadCuis, ponerFueraDeLinea, volverEnLinea } from '$lib/core/api_tools';
	import { ambientesFacturacion, modalidadesFacturacion } from '$lib/core/constants';
	import {
		actividades,
		loadAllLists,
		parametricaEventosSignificativos,
		parametricaTipoDocumentoSector,
		parametricaTiposFactura
	} from '$lib/core/globals';
	import { getIcon } from '$lib/core/icons';
	import { facturacionCompraVentaService } from '$lib/core/services';

	import {
		authToken,
		codigoActividadEconomica,
		codigoAmbiente,
		codigoDocumentoSector,
		codigoModalidad,
		codigoPuntoVenta,
		codigoSucursal,
		codigoTipoEmision,
		municipio,
		nit,
		razonSocialEmisor,
		siatApiKey,
		snackBar,
		telefono,
		tipoFacturaDocumento,
		user
	} from '$lib/core/store';
	import { onMount } from 'svelte';
	let showModal = false;
	let siatExtraData: any = {};
	let validando = false;

	async function verficarComunicacion() {
		try {
			const response = facturacionCompraVentaService.verificarComunicacion({
				codigoAmbiente: $codigoAmbiente
			});
			if ((await response).ok) {
				return true;
			}
			return false;
		} catch (error) {
			return false;
		}
	}

	const title = 'Facturas de contingencia';
	onMount(async () => {
		console.log({ parametricaTipoDocumentoSector });
	});
	function logout() {
		user.flush();
		authToken.flush();
		goto('/auth');
	}
	async function reset() {
		const _punto = $codigoPuntoVenta;
		const _sucursal = $codigoSucursal;
		localStorage.clear();
		// reset stores

		// reset globals
		codigoPuntoVenta.sync(_punto);
		codigoSucursal.sync(_sucursal);
		window.location.reload();
		// await loadCuis({forceRenew:true});
		// await loadCufd({forceRenew:true});
		// await loadAllLists();
	}
	async function reloadCodes() {
		await loadCuis({ forceRenew: true });
		await loadCufd({ forceRenew: true });
		await loadAllLists();
		snackBar.show('Codigos renovados');
	}
</script>

<div class="route">
	<div class="head">
		<h3>Configuraciones</h3>
		<div class="tools">
			<!-- <button class="logout" on:click={async () => await reset()}> Reset </button> -->
			<button class="logout" on:click={async () => await reloadCodes()}> Renovar Codigos </button>
			<button class="logout" on:click={() => logout()}> Cerrar sesi??n </button>
		</div>
	</div>
	<div class="content">
		<div class="item">
			<h4>Informacion</h4>

			<div>
				<label for="nit">Nit</label>
				<input
					type="text"
					value={$nit}
					on:change={(e) => nit.sync(Number(e.currentTarget.value))}
				/>
			</div>
			<div>
				<label for="razonSocialEmisor">Razon social emisor</label>
				<input
					type="text"
					value={$razonSocialEmisor}
					on:change={(e) => razonSocialEmisor.sync(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label for="municipio">Municipio</label>
				<input
					type="text"
					value={$municipio}
					on:change={(e) => municipio.sync(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label for="telefono">Telefono</label>
				<input
					type="text"
					value={$telefono}
					on:change={(e) => telefono.sync(e.currentTarget.value)}
				/>
			</div>
		</div>
		<div class="item">
			<h4>Parametricas</h4>
			<div>
				<label for="codigoActividadEconomica">Actividad economica</label>
				<select
					value={String($codigoActividadEconomica)}
					on:change={(e) => codigoActividadEconomica.sync(Number(e.currentTarget.value))}
				>
					{#each actividades as i}
						<option value={i.codigoCaeb}>{i.descripcion}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="tipoFacturaDocumento">Tipo factura documento</label>
				<select
					value={$tipoFacturaDocumento}
					on:change={(e) => tipoFacturaDocumento.sync(Number(e.currentTarget.value))}
				>
					{#each parametricaTiposFactura as i}
						<option value={i.codigoClasificador}>{i.descripcion}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="codigoDocumentoSector">Codigo documento sector</label>
				<select
					value={$codigoDocumentoSector}
					on:change={(e) => codigoDocumentoSector.sync(Number(e.currentTarget.value))}
				>
					{#each parametricaTipoDocumentoSector as i}
						<option value={i.codigoClasificador}>{i.descripcion}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="item">
			<h4>Facturacion</h4>
			<div>
				<label for="siatApikey">Token Siat</label>
				<input
					type="text"
					value={$siatApiKey}
					on:change={async (e) => {
						siatApiKey.sync(e.currentTarget.value);
					}}
				/>
			</div>
			<div>
				<label for="codigoSucursal">Codigo sucursal</label>
				<input
					type="number"
					value={$codigoSucursal}
					on:keyup={async (e) => {
						codigoSucursal.sync(Number(e.currentTarget.value));
						await loadCuis({ forceRenew: true });
						await loadCufd({ forceRenew: true });
						await loadAllLists();
					}}
				/>
			</div>
			<div>
				<label for="codigoPuntoVenta">Codigo punto de venta</label>
				<input
					type="number"
					value={$codigoPuntoVenta}
					on:keyup={async (e) => {
						codigoPuntoVenta.sync(Number(e.currentTarget.value));
						await loadCuis({ forceRenew: true });
						await loadCufd({ forceRenew: true });
						await loadAllLists();
					}}
				/>
			</div>
			<div>
				<label for="codigoAmbiente">Codigo ambiente</label>
				<select
					value={$codigoAmbiente}
					on:change={async (e) => {
						codigoAmbiente.sync(Number(e.currentTarget.value));
						await loadCuis({ forceRenew: true });
						await loadCufd({ forceRenew: true });
						await loadAllLists();
					}}
				>
					{#each ambientesFacturacion as i}
						<option value={i.value}>{i.label}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="codigoModalidad">Codigo modalidad</label>
				<select
					value={$codigoModalidad}
					on:change={(e) => codigoModalidad.sync(Number(e.currentTarget.value))}
				>
					{#each modalidadesFacturacion as i}
						<option value={i.value}>{i.label}</option>
					{/each}
				</select>
			</div>
			<!-- <div>
				<label for="tipoEmision"> Tipo de emisi??n </label>
				<select
					name="tipoEmision"
					id="tipoEmision"
					value={$codigoTipoEmision}
					on:change={(e) => codigoTipoEmision.sync(Number(e.currentTarget.value))}
				>
					{#each parametricaTipoEmision as tipoEmision}
						<option value={tipoEmision.codigoClasificador}>{tipoEmision.descripcion}</option>
					{/each}
				</select>
			</div> -->
			<div>
				<label for="tipoEmision"> Tipo de emisi??n </label>
				<div class="tipoEmision">
					<div
						class="en linea"
						on:click={async () => {
							if (validando) return;
							try {
								validando = true;
								await volverEnLinea();
							} catch (error) {
								snackBar.show(error.message);
							} finally {
								validando = false;
							}
						}}
					>
						<p>En linea</p>
						{#if validando}
							<div>
								<InfinitySpinner size={24} />
							</div>
						{:else}
							<i class="icon">
								{@html getIcon({
									name: $codigoTipoEmision === 1 ? 'CheckmarkSquare' : 'CheckboxUnchecked'
								}).outlined}
							</i>
						{/if}
					</div>
					<div class="en linea" on:click={() => (showModal = true)}>
						<p>Fuera de linea</p>
						<i class="icon">
							{@html getIcon({
								name: $codigoTipoEmision === 2 ? 'CheckmarkSquare' : 'CheckboxUnchecked'
							}).outlined}
						</i>
					</div>
				</div>
			</div>
			<!-- <div>
				<label for="tipoEmision"> Facturacion manual? </label>
				<input
					type="radio"
					checked={$facturacionManual}
					on:click={() => facturacionManual.sync(!$facturacionManual)}
				/>
			</div> -->
			<!-- <div>
				<label for="cafc">
					CAFC
					<a
						href="https://siatinfo.impuestos.gob.bo/index.php/informacion/codigos-de-autorizacion#:~:text=CAFC%20(C%C3%B3digo%20Autorizaci%C3%B3n%20Facturas%20Contingencia,de%20facturas%20manuales%20de%20contingencia."
						target="_blank">Consultar CAFC</a
					>
				</label>
				<input
					type="text"
					name="cafc"
					id="cafc"
					value={$cafc}
					on:change={(e) => cafc.sync(e.currentTarget.value)}
				/>
			</div> -->
		</div>
	</div>
</div>
{#if showModal}
	<Modal
		title="Motivo"
		on:close={() => {
			showModal = false;
		}}
	>
		<div class="modal">
			<div>
				<label for="">Descripcion</label>
				<input type="text" bind:value={siatExtraData.descripcion} />
			</div>
			<div>
				<label for="">Tipo de evento</label>
				<select name="Metodo de pago" id="" bind:value={siatExtraData.codigoMotivoEvento}>
					{#each (parametricaEventosSignificativos || []).slice(0, 4) as evento}
						<option value={evento.codigoClasificador}>{evento.descripcion}</option>
					{/each}
				</select>
			</div>
			<div>
				<button
					on:click={async () => {
						await ponerFueraDeLinea(siatExtraData.codigoMotivoEvento, siatExtraData.descripcion);
						showModal = false;
					}}
				>
					Confirmar
				</button>
			</div>
		</div>
	</Modal>
{/if}

<style lang="scss">
	.route {
		display: grid;
		gap: 1rem;
		grid-template-rows: auto 1fr;
		.content {
			display: grid;
			place-content: start;
			place-items: start;
			overflow: auto;
			gap: 0.5rem;
			height: 100%;
			width: 100%;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			grid-auto-rows: 1fr;
			padding: 0.5rem;
			.item {
				width: 100%;
				border-radius: 6px;
				height: 100%;
				padding: 0.5rem;
				display: grid;
				place-content: start stretch;
				gap: 0.5rem;

				box-shadow: var(--box-shadow-main);
				input,
				select {
					width: 100%;
				}
				h4 {
					text-align: center;
				}
			}
		}
	}
	.head {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		justify-content: space-between;
		.tools {
			display: grid;
			grid-auto-flow: column;
			gap: 0.5rem;
			align-items: center;
			justify-content: end;
		}
		button {
			background-color: #000;
			color: #fff;
			border: none;
			padding: 0.5rem;
			border-radius: 0.25rem;
			cursor: pointer;
		}
	}
	.modal {
		display: grid;
		gap: 0.5rem;
		padding: 00.5rem;
		button {
			width: 100%;
			color: var(--text-color);
		}
	}
	.tipoEmision {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		div {
			display: grid;
			place-content: center;
		}
	}
</style>
