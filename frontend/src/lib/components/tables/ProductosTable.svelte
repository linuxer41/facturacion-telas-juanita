<script lang="ts">
	import MainFilter from '$lib/components/filters/MainFilter.svelte';
	import { productoService } from '$lib/core/services';
	import { snackBar } from '$lib/core/store';
	import { formatCurrency } from '$lib/core/utils';
	import { onMount } from 'svelte';
	import Search from '../common/Search.svelte';
	import ProductoForm from '../forms/ProductoForm.svelte';
	import AddIcon from './components/AddIcon.svelte';
	import NoReportData from './components/NoReportData.svelte';
	import ReportBottomBar from './components/ReportBottomBar.svelte';
	import ReportTopbar from './components/ReportTopbar.svelte';
	export let contact_type_code = 'CUSTOMER';
	export let title = 'Reporte de Productos';
	let _filter_obj = {
		_from: null,
		_to: null,
		_period: null
	};

	let limit = 50;
	let page = 1;

	let filterCount = 0;

	let sorting = 'created_at';

	let keyword = '';

	let openForm = false;

	let show_filter = false;

	let _count = 0;

	let targetData: Producto;

	let _data: Producto[] = [];
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

	async function _load() {
		try {
			const response = await productoService.query({
				limit,
				page,
				sorting,
				detalle: keyword,
				..._filter_obj
			});
			if (response.status === 200) {
				const _resData = await response.json();
				_data = _resData.data;
				_count = _resData.count;
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			snackBar.show('Error al cargar los datos');
		}
	}

	async function _loadAll() {
		try {
			const response = await productoService.query();
			if (response.status === 200) {
				const _resData = await response.json();
				_data = _resData.data;
				_count = _resData.count;
			} else {
				console.log(await response.text());
			}
			return [];
		} catch (error) {
			snackBar.show('Error al cargar los datos');
		}
	}
	async function onExport() {
		const data = await _loadAll();
		let docName = 'Reporte de Productos';

		// downloadDebts(data, docName.split(' ').join('_'), docName);
	}

	function onSelect(e) {
		targetData = e.detail;
		openForm = true;
	}

	function handleCancel() {
		openForm = false;
		targetData = undefined as any;
	}
	async function handleCreate(e: CustomEvent) {
		targetData = undefined as any;
		openForm = false;
		await _load();
	}
	async function handleUpdate(e: CustomEvent) {
		targetData = undefined as any;
		openForm = false;
		await _load();
	}

	async function handleDelete(e) {
		targetData = undefined as any;
		openForm = false;
		await _load();
	}

	onMount(async () => {
		await _load();
	});
</script>

<div class="report">
	<div class="top">
		<ReportTopbar {title} on:close on:export={onExport} on:filter={() => (show_filter = true)} />
		<div class="info">
			<Search {keyword} on:search={onSearch} />
			<p class="total_info">
				<span> {_count || 0} Productos</span>
			</p>
		</div>
	</div>
	<div class="content">
		{#if (_data || []).length}
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th> Codigo </th>
						<th>Nombre</th>
						<th>Stock</th>
						<th>Precio</th>
						<th>UDM</th>
						<th> Codigo SIN </th>
					</tr>
				</thead>
				<tbody>
					{#each _data || [] as item, index}
						<tr on:click={() => (targetData = item)}>
							<td>{item.id}</td>
							<td>{item.codigoProducto}</td>
							<td>{item.detalle}</td>
							<td>{item.cantidad}</td>
							<td>{formatCurrency(item.precio)}</td>
							<td>{item.codigoUnidadMedida}</td>
							<td>{item.codigoProductoSiat}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<NoReportData message="Sin datos para este reporte" />
		{/if}
		<AddIcon on:click={() => (openForm = true)} />
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

{#if openForm || targetData}
	<ProductoForm
		on:close={handleCancel}
		on:create={handleCreate}
		on:update={handleUpdate}
		on:delete={handleDelete}
		update={!!targetData}
		data={targetData}
	/>
{/if}

<style lang="scss">
	@import './_style';
</style>
