<script lang="ts">
	import MainFilter from '$lib/components/filters/MainFilter.svelte';
	import { getIcon } from '$lib/core/icons';
	import { facturaService } from '$lib/core/services';
	import { snackBar } from '$lib/core/store';
	import { formatCurrency, formatDateTime, getDateRanges, onInvoiceReady } from '$lib/core/utils';
	import { downloadInvoices } from '$lib/core/utils/export_data';
	import { onMount } from 'svelte';
	import DocumentRenderer from '../common/DocumentRenderer.svelte';
	import Search from '../common/Search.svelte';
	import InvoiceDocument from '../documents/InvoiceDocument.svelte';
	import AnularFacturaModal from '../modals/AnularFacturaModal.svelte';
	import DeleteConfirmModal from '../modals/DeleteConfirmModal.svelte';
	import PaquetesModal from '../modals/PaquetesModal.svelte';
	import NoReportData from './components/NoReportData.svelte';
	import ReportBottomBar from './components/ReportBottomBar.svelte';
	import ReportTopbar from './components/ReportTopbar.svelte';
	export let contact_type_code = 'CUSTOMER';
	export let title = 'Reporte de Facturas';
	let _filter_obj = {
		_from: null as Date,
		_to: null as Date,
		_period: null as string
	};

	let limit = 50;
	let page = 1;

	let filterCount = 0;

	let sorting = 'created_at';

	let toViewData: Factura;
	let toNullData: Factura;
	let toDeleteData: Factura;

	let keyword = '';

	let show_filter = false;
	let show_package = false;

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
			snackBar.show('Error al anular la factura');
			console.log(error);
		}
	}

	function getPeriodDates(fileter: typeof _filter_obj) {
		if (fileter._period) {
			const ranges = getDateRanges();
			const range = ranges.find((r) => r.key === fileter._period);
			if (range) {
				return {
					desde: range.range[0].toISOString(),
					hasta: range.range[1].toISOString()
				};
			}
		}
		return {
			desde: fileter._from?.toISOString(),
			hasta: fileter._to?.toISOString()
		};
	}

	async function _load() {
		try {
			const response = await facturaService.query({
				limit,
				page,
				sorting,
				clientName: keyword,
				cuf: keyword,
				orderBy: 'numero',
				order: 'DESC',
				// tipoEmision: 'EN LINEA',
				// estado: 'VALIDADA',
				// mainFacturas: true,
				...getPeriodDates(_filter_obj)
			});
			if (response.status === 200) {
				const _resData = await response.json();
				_data = _resData.data;
				_count = _resData.count;
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			console.log(error);
			snackBar.show('Error al cargar los datos');
		}
	}
	async function _loadAll() {
		try {
			const response = await facturaService.query({
				limit:1000,
				page,
				sorting,
				clientName: keyword,
				cuf: keyword,
				orderBy: 'numero',
				order: 'ASC',
				// tipoEmision: 'EN LINEA',
				// estado: 'VALIDADA',
				// mainFacturas: true,
				...getPeriodDates(_filter_obj)
			});
			if (response.status === 200) {
				const _resData = await response.json();
				return _resData.data;
			}
			return [];
		} catch (error) {
			snackBar.show('Error al cargar los datos');
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

	async function onExport() {
		const data = await _loadAll();
		let docName = 'Reporte de Facturas';

		downloadInvoices(data, docName.split(' ').join('_'), docName);
	}
	function getColor(estado: string) {
		switch (estado) {
			case 'VALIDADA':
				return 'green';
			case 'ANULADA':
				return 'gray';
			case 'PENDIENTE':
				return 'orange';
			case 'OBSERVADA':
				return 'blue';
			case 'RECHAZADA':
				return 'red';
			default:
				return 'black';
		}
	}

	onMount(() => {
		_load();
	});
</script>

<div class="report">
	<div class="top">
		<ReportTopbar
			{title}
			on:close
			on:export={onExport}
			on:filter={() => (show_filter = true)}
			showTools
			hasPackage
			on:package={() => (show_package = true)}
		/>
		<div class="info">
			<Search {keyword} placeholder="Buscar por cliente o CUF" on:search={onSearch} />
			<p class="total_info">
				<span> {_count || 0} Facturas</span>
			</p>
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
						<th> Tipo de emisión </th>
						<th>Usuario</th>
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
							<td>
								<span class="chip" style="background-color: {getColor(item.estado)};"
									>{item.estado}</span
								>
							</td>
							<td>{item.tipoEmision}</td>
							<td>{item.user?.firstName || ''}</td>
							<td>{item.cuf}</td>
							<td class="actions">
								<div class="icons">
									<!-- <i class="icon" on:click={async () => (toViewData = item)}>
										{@html getIcon({ name: 'EyeShow' }).filled}
									</i> -->

									<i
										class="icon"
										on:click={async () => {
											window.open(`http://localhost:3000/${item.pdf}`, '_blank');
										}}
									>
										{@html getIcon({ name: 'EyeShow' }).filled}
									</i>
									<!-- <i class="icon" on:click={async () => {
										const a = document.createElement('a');
										a.href = item.pdf;
										a.download = `Factura_${item.numero}.pdf`;
										a.click();
									}}>
										{@html getIcon({ name: 'Download' }).filled}
									</i> -->
									<i
										class="icon alert"
										class:disabled={item.estado === 'ANULADO'}
										on:click={() => (item.estado === 'ANULADO' ? null: (toNullData = item))}
									>
										{@html getIcon({ name: 'DocumentProhibited' }).filled}
									</i>
									{#if !['VALIDADA', 'ANULADA', 'OBSERVADA'].includes(item.estado)}
										<i class="icon error" on:click={async () => toDeleteData = item}>
											{@html getIcon({ name: 'Delete' }).filled}
										</i>
									{/if}
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
			_load();
			show_filter = false;
		}}
	/>
{/if}
{#if show_package}
	<PaquetesModal
		on:close={() => {
			show_package = false;
		}}
		on:validated={(e) => {
			show_package = false;
			_load();
		}}
	/>
{/if}

{#if toNullData}
	<AnularFacturaModal
		factura={toNullData}
		on:close={() => (toNullData = null)}
		on:success={(e) => {
			toNullData = null;
			update(e);
		}}
	/>
{/if}
{#if toDeleteData}
	<DeleteConfirmModal
		title="Eliminar factura"
		message="¿Está seguro que desea eliminar esta factura?, esta acción no se puede deshacer."
		on:close={() => (toDeleteData = null)}
		on:cancel={() => (toDeleteData = null)}
		on:confirm={(e) => {
			_delete(toDeleteData);
			toDeleteData = null;
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

<style lang="scss">
	@import './_style';
	.chip {
		color: #f5f5f5;
		border-radius: 15px;
		text-align: center;
		padding: 5px 10px;
		margin: 5px;
	}
</style>
