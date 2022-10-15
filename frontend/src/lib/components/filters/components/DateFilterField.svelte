<script lang="ts">
	import { getDateRanges } from '$lib/core/utils';
	import { getIcon } from '$lib/core/icons';
	import { format } from 'date-fns';
	import { es } from 'date-fns/locale';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import { createEventDispatcher, onMount } from 'svelte';
	export let _from: Date;
	export let _to: Date;
	export let _period: string;
	let fromEl: HTMLElement;
	let toEl: HTMLElement;

	function chunkArrayInGroups(arr, size) {
		var myArray = [];
		for (var i = 0; i < arr.length; i += size) {
			myArray.push(arr.slice(i, i + size));
		}
		return myArray;
	}
	const date_ranges = getDateRanges();
	function _dispatchFilter() {
		dispatch('change', {
			from: _from,
			to: _to,
			period: _period
		});
	}
	const handleFromInput = (e) => {
		let _date = e[0];
		console.log(e);
		_from = _date;
		_period = null;
		_dispatchFilter();
	};
	const handleToInput = (e) => {
		let _date = e[0];
		console.log(e);
		_to = _date;
		_period = null;
		_dispatchFilter();
	};

	const dispatch = createEventDispatcher();
	let from_fp;
	let to_fp;
	onMount(() => {
		// to_fp.setDate(to_fp.config.maxDate);
		from_fp = flatpickr(fromEl, {
			locale: Spanish,
			dateFormat: 'Y-m-d',
			onChange: handleFromInput,
			onOpen: () => null,
			onClose: () => null
		});
		to_fp = flatpickr(toEl, {
			locale: Spanish,
			dateFormat: 'Y-m-d',
			allowInput: false,
			altInput: false,
			clickOpens: false,
			onChange: handleToInput,
			onOpen: () => () => null,
			onClose: () => () => null
		});

		to_fp.setDate(to_fp.config.maxDate);
	});
</script>

<div class="date-filter">
	<div class="date-range">
		<h4 class="title">{@html getIcon({ name: 'CalendarLtr' }).outlined} Rango de fecha</h4>
		<div class="range">
			<div class="date-filter-field">
				<h3 on:click={() => from_fp.open()} bind:this={fromEl}>
					{#if _from}
						{format(_from, 'LLL dd, yyyy', { locale: es })}
					{:else}
						Desde
					{/if}
				</h3>
				{#if _from}
					<i
						class="icon"
						on:click={() => {
							_from = null;
							_dispatchFilter();
						}}
					>
						{@html getIcon({ name: 'Dismiss' }).outlined}
					</i>
				{/if}
				<input class="flat-picker" type="date" bind:this={fromEl} />
			</div>
			<div class="date-filter-field">
				<h3 on:click={() => to_fp.open()}>
					{#if _to}
						<!-- {_to} -->
						{format(_to, 'LLL dd, yyyy', { locale: es })}
					{:else}
						Hasta
					{/if}
				</h3>
				{#if _to}
					<i
						class="icon"
						on:click={() => {
							_to = null;
							_dispatchFilter();
						}}
					>
						{@html getIcon({ name: 'Dismiss' }).outlined}
					</i>
				{/if}
				<input class="flat-picker" type="date" bind:this={toEl} />
			</div>
		</div>
	</div>
	<table>
		<tbody>
			{#each date_ranges.slice(0, 1) as date_range}
				<tr>
					<td
						colspan="2"
						class:active={_period === date_range.key}
						on:click={() => {
							_period = date_range.key;
							_from = null;
							_to = null;
							_dispatchFilter();
						}}
					>
						{date_range.label}
					</td>
				</tr>
			{/each}
			{#each chunkArrayInGroups(date_ranges.slice(1, date_ranges.length), 2) as _date_ranges}
				<tr>
					{#each _date_ranges as date_range}
						<td
							class:active={date_range.key === _period}
							on:click={() => {
								_period = date_range.key;
								_from = null;
								_to = null;
								_dispatchFilter();
							}}
						>
							{date_range.label}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.date-filter {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		text-align: center;
		background-color: var(--background-color-light);
		border-radius: 6px;
		// overflow: hidden;
		.date-range {
			.title {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: 0.5rem;
				place-content: center;
				padding-top: 0.5rem;
			}
			white-space: nowrap;
			display: grid;
			gap: 1rem;
			place-content: center;
			.date-filter-field {
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 0.5rem;
				position: relative;
				h3 {
					padding: 1rem;
					border-bottom: 1px solid var(--secondary-color);

					color: var(--text-color-light);
					font-weight: 100;
					cursor: pointer;
				}
				.flat-picker {
					position: absolute;
					width: 0;
					height: 0;
					bottom: 0;
					z-index: -1;
					visibility: hidden;
				}
			}
		}
		table {
			width: 100%;

			font-size: 0.95rem;
			tbody {
				text-align: start;
				tr {
					td {
						width: 50%;
						padding: 0.5rem;
						border: 1px solid var(--border-color);
						cursor: pointer;
						&:first-child {
							text-align: center;
							border-top-left-radius: 5px;
							border-bottom-left-radius: 5px;
						}
					}
				}
			}
		}
		.active {
			color: var(--primary-color);
		}
	}
</style>
