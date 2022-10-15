<script lang="ts">
	import { productoService } from '$lib/core/services';
	import { roundToTwo } from '$lib/core/utils/formatters';

	import { createEventDispatcher, onMount } from 'svelte';
	import Dialog from '../common/Dialog.svelte';
	import FormModal from './components/FormModal.svelte';
	import CurrencyInput from './inputs/CurrencyInput.svelte';
	import NativeInput from './inputs/NativeInput.svelte';
	import NumberInput from './inputs/NumberInput.svelte';
	export let title = 'Nuevo producto';
	export let update = false;

	export let data: Producto;

	if (!data) data = {} as any;
	if (!data.cantidad) data.cantidad = 99999999;
	if (!data.codigoProductoSiat) data.codigoProductoSiat = '62131';
	if (!data.codigoUnidadMedida) data.codigoUnidadMedida = '30';

	let targetForm: HTMLFormElement;

	let loading = false;
	let deleteConfirm = false;

	const dispatch = createEventDispatcher();

	function minify() {
		const minify = { ...data };
		minify.precio = roundToTwo(minify.precio);
		return minify;
	}

	async function _create() {
		const minified = minify();
		try {
			const response = await productoService.create(minified);
			if (response.status === 200) {
				data = await response.json();
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function _update() {
		const minified = minify();
		try {
			const response = await productoService.patch(minified.id, minified);
			if (response.status === 200) {
				data = await response.json();
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function _delete() {
		const minified = minify();
		try {
			const response = await productoService.delete(minified.id);
			if (response.status === 200) {
				data = await response.json();
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function onProcess(type: 'delete' | 'update' | 'create' | 'cancel' | 'close') {
		// fix double click
		if (loading) {
			return;
		}
		loading = true;
		try {
			switch (type) {
				case 'delete':
					await _delete();
					dispatch('delete', data);
					break;
				case 'update':
					if (targetForm.checkValidity()) {
						await _update();
						dispatch('update', data);
					} else {
						targetForm.reportValidity();
					}
					break;
				case 'create':
					if (targetForm.checkValidity()) {
						await _create();
						dispatch('create', data);
					} else {
						targetForm.reportValidity();
					}
					break;
				// case 'cancel' || 'close':
				default:
					dispatch('close');
					break;
			}
		} catch (error) {
			console.debug(error);
		} finally {
			loading = false;
		}
	}
	onMount(async () => {});
</script>

<FormModal
	on:accept={() => onProcess(update ? 'update' : 'create')}
	on:delete={() => (deleteConfirm = true)}
	on:close={() => onProcess('close')}
	{title}
	{loading}
	hasDelete={update}
>
	<form action="javascript:void(0);" bind:this={targetForm}>
		<div>
			<NativeInput bind:value={data.codigoProducto} label="Codigo" description="" />
		</div>
		<div>
			<NativeInput bind:value={data.detalle} label="Detalle" description="" />
		</div>
		<div>
			<CurrencyInput bind:value={data.precio} label="Precio" description="Costo del producto" />
		</div>
		<div>
			<NumberInput bind:value={data.cantidad} label="Stock" />
		</div>
		<div>
			<NativeInput bind:value={data.codigoProductoSiat} label="Codigo SIN" description="" />
		</div>
		<div>
			<NativeInput bind:value={data.codigoUnidadMedida} label="Codigo Medida" description="" />
		</div>
	</form>
	{#if deleteConfirm}
		<Dialog
			title="Eliminar producto"
			message="¿Estás seguro de eliminar este producto?. esta accion no se puede revertir"
			on:confirm={() => {
				deleteConfirm = false;
				onProcess('delete');
			}}
			on:cancel={() => (deleteConfirm = false)}
		/>
	{/if}
</FormModal>

<style lang="scss">
	//@import '_style';
	form {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		padding: 1rem;
	}
</style>
