<script lang="ts">
	import { updateAllCart } from '$lib/core/api_tools';

	import { parametricaTipoDocumentoIdentidad, parametricaTipoMetodoPago } from '$lib/core/globals';
	import { createEventDispatcher } from 'svelte';

	import Modal from '../common/Modal.svelte';
	import NumberInput from '../forms/inputs/NumberInput.svelte';
	import TextInput from '../forms/inputs/TextInput.svelte';
	export let cart: Cart;
	function handleAditionalDiscount(e: any) {
		const value = Number(e.currentTarget.value);
		if (value > 0) {
			cart.descuentoAdicional = value;
			cart = updateAllCart(cart);
		}
	}
	function handleGiftCardInput(e: any) {
		const value = Number(e.currentTarget.value);
		if (value > 0) {
			cart.montoGiftCard = value;
			cart = updateAllCart(cart);
		}
	}
	console.log(parametricaTipoMetodoPago);
	function canUseCard(codigo) {
		const name = parametricaTipoMetodoPago.find(
			(item) => String(item.codigoClasificador) === String(codigo || 1)
		);
		const description = name?.descripcion;
		return new RegExp('tarjeta', 'i').test(description);
	}
	function canUseGiftCard(codigo) {
		const name = parametricaTipoMetodoPago.find(
			(item) => String(item.codigoClasificador) === String(codigo || 1)
		);
		const description = name?.descripcion;
		return new RegExp('card', 'i').test(description) || new RegExp('gift', 'i').test(description);
	}
	const dispatch = createEventDispatcher();
</script>

<Modal title="Detalles de factura" on:close>
	<div class="details">
		<div>
			<label for="">Tipo de documento:</label>
			<select name="Metodo de pago" id="" bind:value={cart.codigoTipoDocumentoIdentidad}>
				{#each parametricaTipoDocumentoIdentidad as metodo}
					<option value={metodo.codigoClasificador}>{metodo.descripcion}</option>
				{/each}
			</select>
		</div>
		<div>
			<TextInput label="NIT / CI" bind:value={cart.cliente.nit} description="" />
		</div>
		<div>
			<TextInput label="Razon Social" bind:value={cart.cliente.name} description="" />
		</div>
		<!-- <div>
			<NumberInput
				label="Descuento Adicional"
				value={cart.descuentoAdicional}
				on:input={handleAditionalDiscount}
			/>
		</div> -->

		<div>
			<label for="">Forma de pago:</label>
			<select name="Metodo de pago" id="" bind:value={cart.codigoMetodoPago}>
				{#each parametricaTipoMetodoPago as metodo}
					<option value={metodo.codigoClasificador}>{metodo.descripcion}</option>
				{/each}
			</select>
		</div>

		{#if canUseGiftCard(cart.codigoMetodoPago)}
			<div>
				<NumberInput
					label="Monto gift card"
					value={cart.montoGiftCard}
					on:input={handleGiftCardInput}
				/>
			</div>
		{/if}
		{#if canUseCard(cart.codigoMetodoPago)}
			<div>
				<TextInput label="Numero de tarjeta" bind:value={cart.numeroTarjeta} description="" />
			</div>
		{/if}

		<div>
			<button on:click={() => dispatch('confirm', cart)}> Confirmar </button>
		</div>
	</div>
</Modal>

<style lang="scss">
	.details {
		padding: 0.5rem;
		display: grid;
		gap: 1rem;
		select {
			border-radius: 6px;
			padding: 0.5rem;
			border: 1px solid #ccc;
			option {
				padding: 0.5rem 1rem;
				&:hover {
					background-color: #ccc;
				}
			}
		}
		button {
			padding: 0.5rem;
			box-shadow: var(--box-shadow-main);
			background-color: var(--primary-color);
			color: var(--text-color-on-primary);
			border-radius: 20px;
		}
	}
</style>
