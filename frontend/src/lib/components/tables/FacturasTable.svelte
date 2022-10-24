<script lang="ts">
	import MainFilter from '$lib/components/filters/MainFilter.svelte';
	import { getIcon } from '$lib/core/icons';
	import { facturaService } from '$lib/core/services';
	import { snackBar } from '$lib/core/store';
	import { formatCurrency, formatDateTime, getDateRanges, onInvoiceReady } from '$lib/core/utils';
	import { onMount } from 'svelte';
	import DocumentRenderer from '../common/DocumentRenderer.svelte';
	import Search from '../common/Search.svelte';
	import InvoiceDocument from '../documents/InvoiceDocument.svelte';
	import AnularFacturaModal from '../modals/AnularFacturaModal.svelte';
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

	function getPeriodDates(fileter: typeof _filter_obj){
		if(fileter._period){
			const ranges = getDateRanges();
			const range = ranges.find(r => r.key === fileter._period);
			if(range){
				return {
					desde: (range.range[0]).toISOString(),
					hasta: (range.range[1]).toISOString()
				}
			}
		}
		return {
			desde: (fileter._from)?.toISOString(),
			hasta: (fileter._to)?.toISOString()
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
				// tipoEmision: 'EN LINEA',
				estado: 'VALIDADA',
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
				limit,
				page,
				sorting,
				name: keyword,
				..._filter_obj
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

	async function onExport() {
		const data = await _loadAll();
		let docName = 'Reporte de Facturas';

		// downloadDebts(data, docName.split(' ').join('_'), docName);
	}


	onMount(() => {
		_load();
	});
</script>

<div class="report">
	<div class="top">
		<ReportTopbar {title} on:close on:export={onExport} on:filter={() => (show_filter = true)} showTools />
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
							<td>{item.estado}</td>
							<td>{item.user?.firstName || ''}</td>
							<td>{item.cuf}</td>
							<td class="actions">
								<div class="icons">
									<!-- <i class="icon" on:click={async () => (toViewData = item)}>
										{@html getIcon({ name: 'EyeShow' }).filled}
									</i> -->

									<i class="icon" on:click={async () => {
										window.open(`http://localhost:3000/${item.pdf}`, '_blank');
									}}>
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
										class:disabled={item.estado !== 'VALIDADA'}
										on:click={() => (item.estado === 'VALIDADA' ? (toNullData = item) : null)}
									>
										{@html getIcon({ name: 'DocumentProhibited' }).filled}
									</i>
									<!-- <i class="icon error">
										{@html getIcon({ name: 'Delete'}).filled}
									</i> -->
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
</style>
