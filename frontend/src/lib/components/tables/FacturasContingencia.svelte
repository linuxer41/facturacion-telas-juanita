<script lang="ts">
	import MainFilter from '$lib/components/filters/MainFilter.svelte';
	import { validarFacturas } from '$lib/core/api_tools';
	import { getIcon } from '$lib/core/icons';
	import { facturaService } from '$lib/core/services';
	import {
		codigoTipoEmision,
		eventoSignificativo,
		facturacionManual,
		snackBar
	} from '$lib/core/store';
	import { formatCurrency, formatDateTime, onInvoiceReady } from '$lib/core/utils';
	import { onMount } from 'svelte';
	import CartPanel from '../common/CartPanel.svelte';
	import DocumentRenderer from '../common/DocumentRenderer.svelte';
	import InfinitySpinner from '../common/InfinitySpinner.svelte';
	import Modal from '../common/Modal.svelte';
	import InvoiceDocument from '../documents/InvoiceDocument.svelte';
	import RegistarEventoModal from '../modals/RegistarEventoModal.svelte';
	import NoReportData from './components/NoReportData.svelte';
	import ReportBottomBar from './components/ReportBottomBar.svelte';
	import ReportTopbar from './components/ReportTopbar.svelte';
	export let contact_type_code = 'CUSTOMER';
	export let title = 'Reporte de Facturas';
	let _filter_obj = {
		_from: null,
		_to: null,
		_period: null
	};

	let codigoEventoSignificativo: number;

	let loading = false;

	let limit = 500;
	let page = 1;

	let filterCount = 0;

	let sorting = 'created_at';

	let toViewData: Factura;
	let showRegistrarEventoModal = false;
	let showRegistrarFacturaModal = false;

	let keyword = '';

	let show_filter = false;

	let _count = 0;

	let _data: Factura[] = [];
	async function onNext() {
		if (page * limit <= _count) {
			page++;
			await _load();
		}
	}
	async function onPrev() {
		if (page > 1) {
			page--;
			await _load();
		}
	}
	async function onFirst() {
		page = 1;
		await _load();
	}
	async function onLast() {
		page = Math.ceil(_count / limit);
		await _load();
	}

	async function onSearch(e: CustomEvent) {
		keyword = e.detail;
		page = 1;
		await _load();
	}

	async function update(e: CustomEvent) {
		const data: Factura = e.detail;
		data.estado = 'ANULADA';
		try {
			const response = await facturaService.patch(data.id, data);
			if (response.status === 200) {
				snackBar.show('Factura anulada correctamente');
				await _load();
			} else {
				snackBar.show('Error al anular la factura');
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function _delete(data: Factura) {
		try {
			const response = await facturaService.delete(data.id);
			if (response.status === 200) {
				snackBar.show('Factura eliminada correctamente');
				await _load();
			} else {
				snackBar.show('Error al eliminar la factura');
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function _load() {
		try {
			const response = await facturaService.query({
				limit,
				page,
				sorting,
				clientName: keyword,
				cuf: keyword,
				tipoEmision: 'FUERA DE LINEA',
				estado: 'PENDIENTE',
				..._filter_obj
			});
			if (response.status === 200) {
				const _resData = await response.json();
				_data = _resData.data;
				_count = _resData.count;
				// order by createdAt
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			snackBar.show('Error al cargar los datos');
		}
	}

	async function eliminar(id: string) {
		console.log(id);
	}

	// async function validarFacturas() {
	// 	try {
	// 		const eventoSignificativo = null;
	// 		if (!eventoSignificativo) {
	// 			snackBar.show('Debe seleccionar un evento significativo');
	// 			return;
	// 		}
	// 		const requestData = {
	// 			codigoAmbiente: $codigoAmbiente,
	// 			codigoDocumentoSector: $codigoDocumentoSector,
	// 			codigoEmision: $codigoTipoEmision,
	// 			codigoModalidad: $codigoModalidad,
	// 			codigoPuntoVenta: $codigoPuntoVenta,
	// 			codigoSistema: $codigoSistema,
	// 			codigoSucursal: $codigoSucursal,
	// 			cufd: $cufd?.codigo,
	// 			cuis: $cuis?.codigo,
	// 			nit: $nit,
	// 			tipoFacturaDocumento: $tipoFacturaDocumento,
	// 			cafc: $cafc,
	// 			eventoSignificativo: eventoSignificativo
	// 		};
	// 		const response = await facturacionPrepararFacturaService.validarPaquete(requestData);
	// 		if (response.ok) {
	// 			const _resData = await response.json();
	// 			if (_resData.transaccion === true) {
	// 				snackBar.show('Facturas validadas correctamente');
	// 				await _load();
	// 			}
	// 		} else {
	// 			console.log(await response.text());
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	onMount(() => {
		_load();
	});
</script>

<div class="report">
	<div class="top">
		<div>
			<ReportTopbar {title} on:close on:filter={() => (show_filter = true)} />
			{#if $eventoSignificativo}
				<div>
					<div class="title">
						<h5>{$eventoSignificativo.descripcion}</h5>
					</div>
					<div class="dates">
						<b>Desde:</b>
						<span>
							{formatDateTime(new Date($eventoSignificativo.fechaInicio))}
						</span>
						<b>Hasta:</b>
						<span>
							{formatDateTime(new Date($eventoSignificativo.fechaFin))}
						</span>
					</div>
				</div>
			{/if}
			<div class="tools">
				{#if $eventoSignificativo}
					<div>
						<button
							class="button success"
							on:click={async () => {
								try {
									if (loading) return;
									loading = true;
									const validacion = await validarFacturas($eventoSignificativo);
									if (validacion) {
										await _load();
									}
									eventoSignificativo.sync(null);
									codigoTipoEmision.sync(1);
									facturacionManual.sync(false);
								} catch (e) {
									snackBar.show('Error al validar las facturas: ' + e.message);
								} finally {
									loading = false;
								}
							}}
						>
							{#if loading}
								<InfinitySpinner />
							{:else}
								Finalizar evento
							{/if}
						</button>
					</div>
					<div class="right">
						<button class="button success" on:click={() => (showRegistrarFacturaModal = true)}>
							Registrar Facturas
						</button>
						<!-- <button class="button success" on:click={validarFacturas}> Empaquetar </button>
						<button class="button success" on:click={validarFacturas}> Paquetes </button> -->
					</div>
				{:else}
					<div>
						<button class="button success" on:click={() => (showRegistrarEventoModal = true)}>
							Registar evento
						</button>
					</div>
					<div class="right" />
				{/if}
			</div>
		</div>
		<div class="info">
			<!-- <Search {keyword} placeholder="Buscar por cliente o CUF" on:search={onSearch} />
			<p class="total_info">
				<span> {_count || 0} Facturas</span>
			</p> -->
		</div>
	</div>
	<div class="content">
		{#if (_data || []).length}
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Fecha</th>
						<th>Cliente</th>
						<th>Monto</th>
						<th>Estado</th>
						<th>CUF</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{#each _data || [] as item, index}
						<tr>
							<td>{item.numero}</td>
							<td>{formatDateTime(new Date(item.createdAt || ''))}</td>
							<td>{item.clientName || 'Sin nombre'}</td>
							<td>{formatCurrency(item.total || 0)}</td>
							<td>{item.estado}</td>
							<td>{item.cuf}</td>
							<td class="actions">
								<div class="icons">
									<i class="icon" on:click={async () => {
										window.open(`http://localhost:3000/${item.pdf}`, '_blank');
									}}>
										{@html getIcon({ name: 'EyeShow' }).filled}
									</i>
									<i class="icon error" on:click={async()=>await _delete(item)}>
										{@html getIcon({ name: 'Delete'}).filled}
									</i>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<NoReportData message="Sin datos para este reporte" />
		{/if}
	</div>
	<ReportBottomBar
		count={_count}
		{page}
		{limit}
		on:first={onFirst}
		on:prev={onPrev}
		on:next={onNext}
		on:last={onLast}
	/>
</div>
{#if show_filter}
	<MainFilter
		bind:filterCount
		{contact_type_code}
		on:close={() => {
			show_filter = false;
		}}
		{_filter_obj}
		on:filter={(e) => {
			_filter_obj = e.detail;
			show_filter = false;
		}}
	/>
{/if}

{#if showRegistrarEventoModal}
	<RegistarEventoModal
		facturas={_data}
		on:close={() => (showRegistrarEventoModal = false)}
		on:evento={(e) => {
			const evento = e.detail;
			showRegistrarEventoModal = false;
			eventoSignificativo.sync(evento);
			codigoTipoEmision.sync(2);
			// if (Number(evento.codigoEvento) > 4) {
			// 	facturacionManual.sync(true);
			// }
			facturacionManual.sync(true)
		}}
	/>
{/if}
{#if toViewData}
	<DocumentRenderer>
		<InvoiceDocument
			on:ready={onInvoiceReady}
			data={toViewData.json}
			isOnline={['EN LINEA', 'MASIVO'].includes(toViewData.tipoEmision)}
			presentation="roll"
		/>
	</DocumentRenderer>
{/if}
{#if showRegistrarFacturaModal}
	<Modal on:close={() => (showRegistrarFacturaModal = false)}>
		<CartPanel
			isContingencia={true}
			focusedItem={null}
			on:factura={() => {
				showRegistrarFacturaModal = false;
				_load();
			}}
		/>
	</Modal>
{/if}

<style lang="scss">
	@import './_style';
	.tools {
		display: flex;
		place-content: space-between;
		gap: 1rem;
		padding: 0.5rem;
		div {
			display: flex;
			align-items: center;
			select {
				width: 200px;
				padding: 0.5rem;
				border-radius: 0.5rem;
				border: 1px solid #ccc;
			}
		}
		.right {
			display: grid;
			grid-auto-flow: column;
			gap: 0.5rem;
		}
	}
</style>
