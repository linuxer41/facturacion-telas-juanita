<script lang="ts">
	import { clienteService, usuarioService } from '$lib/core/services';

	import { createEventDispatcher, onMount } from 'svelte';
	import Dialog from '../common/Dialog.svelte';
	import FormModal from './components/FormModal.svelte';
	import EmailInput from './inputs/EmailInput.svelte';
	import NativeInput from './inputs/NativeInput.svelte';
	export let title = 'Nuevo cliente';
	export let update = false;
	export let data: Usuario;
	export let isEditing = false;
	if (!data) data = {} as any;
	const clone = { ...data };

	let targetForm: HTMLFormElement;

	let loading = false;
	let deleteConfirm = false;

	const dispatch = createEventDispatcher();

	function minify() {
		const minify = { ...data };
		return minify;
	}

	async function _update() {
		const minified = minify();
		try {
			// get modified object
			const modified = Object.keys(minified).reduce((acc, key) => {
				if (clone[key] !== minified[key]) {
					acc[key] = minified[key];
				}
				return acc;
			}, {});
			console.log({modified});


			const response = await usuarioService.patch(minified.id, modified);
			if (response.status === 200) {
				// data = await response.json();
				dispatch('update');
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.log(error);
		}
	}



	async function onProcess() {
		// fix double click
		if (loading) {
			return;
		}
		loading = true;
		try {
			if (targetForm.checkValidity()) {
						await _update();
						// dispatch('update', data);
					} else {
						targetForm.reportValidity();
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
	on:accept={() => onProcess()}
	on:delete={() => (deleteConfirm = true)}
	on:close
	{title}
	{loading}
	hasDelete={update}
>
	<form action="javascript:void(0);" bind:this={targetForm}>

		<div>
			<EmailInput bind:value={data.email} label="Correo" />
		</div>

		<div>
			<NativeInput bind:value={data.firstName} label="Nombre" description="" />
		</div>
		<div>
			<NativeInput bind:value={data.lastName} label="Apellido" description="" />
		</div>
	</form>

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
