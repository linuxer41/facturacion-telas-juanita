<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import DateFilterField from './components/DateFilterField.svelte';
	import FilterModal from './components/FilterModal.svelte';
	export let contact_type_code = 'CUSTOMER';
	export let title = 'Filtrar Transacciones';
	export let filterCount = 0;
	export let _filter_obj = {
		_from: null,
		_to: null,
		_period: null
	};
	const dispatch = createEventDispatcher();
	$: filterCount = Object.keys(_filter_obj).filter((key) => {
		return _filter_obj[key] !== null;
	}).length;
</script>

<FilterModal
	on:close
	{title}
	{filterCount}
	on:clear={() => {
		Object.keys(_filter_obj).forEach((key) => {
			_filter_obj[key] = null;
		});
		_filter_obj = { ..._filter_obj };
	}}
	on:apply={() => dispatch('filter', _filter_obj)}
>
	<div class="filter">
		<DateFilterField
			_to={_filter_obj._to}
			_from={_filter_obj._from}
			_period={_filter_obj._period}
			on:change={(e) => {
				_filter_obj._from = e.detail.from;
				_filter_obj._to = e.detail.to;
				_filter_obj._period = e.detail.period;
				_filter_obj = { ..._filter_obj };
			}}
		/>
	</div>
</FilterModal>

<style lang="scss">
	@import './__style';
</style>
