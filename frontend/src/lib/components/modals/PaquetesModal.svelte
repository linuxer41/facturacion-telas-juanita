<script lang="ts">
	import { validarPaquete, volverEnLinea } from '$lib/core/api_tools';
	import { facturacionPrepararFacturaService } from '$lib/core/services';
	import { cufdHistory, snackBar } from '$lib/core/store';
	import { formatDateTime } from '$lib/core/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import InfinitySpinner from '../common/InfinitySpinner.svelte';
	import Modal from '../common/Modal.svelte';
	const dispatch = createEventDispatcher();
	let pendientes: { total: number; cufd: string; fechaInicio: string; fechaFin: string, numeros: number[] }[] = [];
	let validando = false;

	async function _load() {
		try {
			const _pendientes = await facturacionPrepararFacturaService.facturasPendientes();
			if (!_pendientes.ok) {
				snackBar.show('Error al obtener las facturas pendientes');
				return;
			}
			pendientes = await _pendientes.json();
		} catch (error) {
			// snackBar.show('No se puede volver en linea, error de comunicacion con el servidor local');
		}
	}
	async function validar(pendiente: typeof pendientes[0]) {
		if (validando) return;
		try {
			validando = true;
			const cufdEvento = ($cufdHistory || []).find((cufd) => cufd.codigo === pendiente.cufd);
			if (!cufdEvento) {
				throw new Error('No se encontro el cufd en el histporial');
			}
			const fechaHoraInicioEvento = pendiente.fechaInicio
				? new Date(pendiente.fechaInicio)
				: new Date();
			const fechaHoraFinEvento = pendiente.fechaFin ? new Date(pendiente.fechaFin) : new Date();
			await validarPaquete({
				codigoEvento: 3,
				cufdEvento: cufdEvento,
				fechaHoraInicioEvento: fechaHoraInicioEvento,
				fechaHoraFinEvento: fechaHoraFinEvento,
				descripcion: 'Evento inesperado'
			});
		} catch (error: any) {
			console.log(error);
			snackBar.show(error.message);
		} finally {
			validando = false;
		}
	}
	onMount(async () => {
		await _load();
	});
</script>

<Modal title="Paquetes Factura pendientes" on:close>
	<div class="details">
		<table>
			<tr>
				<th>Accion</th>
				<th>Total</th>
				<th>Desde</th>
				<th>Hasta</th>
				<th>Numeros</th>
			</tr>
			{#each pendientes as pendiente}
				<tr>
					<td>
						<button
							on:click={async () => {
								await validar(pendiente);
								dispatch('validated');
							}}>
							{#if validando}
								<InfinitySpinner size={16}/>
							{:else}
								Validar
							{/if}
						</button>
					</td>
					<td>{pendiente.total}</td>
					<td>{formatDateTime(new Date(pendiente.fechaInicio))}</td>
					<td>{formatDateTime(new Date(pendiente.fechaFin))}</td>
					<td>{(pendiente.numeros || []).join(',')}</td>
				</tr>
			{/each}
		</table>
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
	table {
		th {
			white-space: nowrap;
		}
	}
</style>
