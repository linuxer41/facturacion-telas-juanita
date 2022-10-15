<script lang="ts">
	import { parametricaTipoDocumentoIdentidad, parametricaTipoMetodoPago } from '$lib/core/globals';
	import { createEventDispatcher } from 'svelte';

	import Modal from '../common/Modal.svelte';
	import NumberInput from '../forms/inputs/NumberInput.svelte';
	import TextInput from '../forms/inputs/TextInput.svelte';
	export let client: Cliente;
	let data: any = {};
	const dispatch = createEventDispatcher();
</script>

<Modal title="Detalles de factura" on:close>
	<div class="details">
		<div>
			<label for="">Tipo de documento:</label>
			<select name="Metodo de pago" id="">
				{#each parametricaTipoDocumentoIdentidad as metodo}
					<option value={metodo.codigoClasificador}>{metodo.descripcion}</option>
				{/each}
			</select>
		</div>
		<div>
			<TextInput label="NIT / CI" bind:value={client.nit} description="" />
		</div>
		<div>
			<TextInput label="Razon Social" bind:value={client.name} description="" />
		</div>
		<div>
			<NumberInput label="Monto gift card" bind:value={data.cantidad1} />
		</div>
		<div>
			<NumberInput label="Descuento Adicional" bind:value={data.cantidad13} />
		</div>
		<div>
			<NumberInput label="Numero de tarjeta" bind:value={data.canti56dad} />
		</div>

		<div>
			<label for="">Forma de pago:</label>
			<select name="Metodo de pago" id="">
				{#each parametricaTipoMetodoPago as metodo}
					<option value={metodo.codigoClasificador}>{metodo.descripcion}</option>
				{/each}
			</select>
		</div>
		<div>
			<button on:click={() => dispatch('close')}> Confirmar </button>
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
