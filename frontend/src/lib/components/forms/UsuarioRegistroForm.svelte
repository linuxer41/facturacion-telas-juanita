<script lang="ts">
	import { SETTINGS } from '$lib/core/config';
	import { clienteService, usuarioService } from '$lib/core/services';

	import { createEventDispatcher, onMount } from 'svelte';
	import Dialog from '../common/Dialog.svelte';
	import FormModal from './components/FormModal.svelte';
	import EmailInput from './inputs/EmailInput.svelte';
	import NativeInput from './inputs/NativeInput.svelte';
	import PasswordInput from './inputs/PasswordInput.svelte';
	export let title = 'Nuevo cliente';
	export let update = false;
	export let data: Usuario & { password: string, roleId: number } = {} as any;
	if (!data) data = {} as any;
	let targetForm: HTMLFormElement;

	let loading = false;
	let deleteConfirm = false;

	const dispatch = createEventDispatcher();

	function minify() {
		const minify = { ...data };
		return minify;
	}



	async function _register() {
		const minified = minify();
		try {
			const response = await fetch(`${SETTINGS.apiUrl}/v1/auth/email/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(minified)
			});
			if (response.status === 200) {
				data = await response.json();
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
			await _register()
			dispatch('register');
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
			<select name="" id="" bind:value={data.roleId}>
				<option value="1" selected>Administrador</option>
				<option value="2">Usuario</option>
			</select>
		</div>
		<div>
			<EmailInput bind:value={data.email} label="Correo" />
		</div>
		<div>
			<PasswordInput bind:value={data.password} label="Contraseña" />
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
