<script lang="ts">
	import { clienteService } from '$lib/core/services';

	import { createEventDispatcher, onMount } from 'svelte';
	import Dialog from '../common/Dialog.svelte';
	import FormModal from './components/FormModal.svelte';
	import EmailInput from './inputs/EmailInput.svelte';
	import NativeInput from './inputs/NativeInput.svelte';
	export let title = 'Nuevo cliente';
	export let update = false;

	export let data: Cliente;
	if (!data) data = {} as any;
	let targetForm: HTMLFormElement;

	let loading = false;
	let deleteConfirm = false;

	const dispatch = createEventDispatcher();

	function minify() {
		const minify = { ...data };
		return minify;
	}

	async function _create() {
		const minified = minify();
		try {
			const response = await clienteService.create(minified);
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
			const response = await clienteService.patch(minified.id, minified);
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
			const response = await clienteService.delete(minified.id);
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
			<NativeInput bind:value={data.name} label="Nombre" description="" />
		</div>
		<div>
			<NativeInput bind:value={data.nit} label="Nit /CI" description="" />
		</div>
		<div>
			<EmailInput bind:value={data.email} label="Correo" />
		</div>
		<div>
			<NativeInput bind:value={data.phone} label="Telefono" description="" />
		</div>
	</form>
	{#if deleteConfirm}
		<Dialog
			title="Eliminar cliente"
			message="¿Estás seguro de eliminar este cliente?. esta accion no se puede revertir"
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
