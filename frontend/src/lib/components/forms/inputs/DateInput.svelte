<script lang="ts">
	import { getIcon } from '$lib/core/icons';

	import { formatCurrency } from '$lib/core/utils';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';

	import { createEventDispatcher, onMount } from 'svelte';
	import FieldInfo from './FieldInfo.svelte';
	export let value: Date;
	export let label: string;
	export let description: string = null;
	export let required = false;
	let focused: boolean = false;
	let input: HTMLInputElement;
	let showInfo = false;

	let fp;
	const dispatch = createEventDispatcher();
	const handleInput = (e) => {
		value = e.target.value;
		dispatch('input', value);
	};
	const handleInputFP = (e) => {
		value = e[0];
		dispatch('input', value);
	};

	onMount(() => {
		fp = flatpickr(input, {
			locale: Spanish,
			dateFormat: 'Y-m-d',
			onChange: handleInputFP,
			onOpen: () => dispatch('open'),
			onClose: () => dispatch('close')
		});
		return () => {
			fp.destroy();
		};
	});

	function openDatePicker() {
		fp.open();
	}

	function onFocus() {
		focused = true;
	}

	function onBlur() {
		setTimeout(() => {
			focused = false;
		}, 500);
	}
</script>

<div class="field" on:click={() => input.focus()}>
	<label class="label" for="">
		{#if !value && !focused}
			{''}
		{:else}
			{label || 'label'}
		{/if}
	</label>
	{#if description && focused}
		<i
			class="icon icon-16 info"
			on:click={() => {
				input.focus();
				showInfo = !showInfo;
			}}
		>
			{@html getIcon({ name: 'QuestionCircle' }).filled}
		</i>
	{/if}

	<div class="data">
		<div>
			<i class="icon icon-24">
				{@html getIcon({ name: 'CalendarLtr' }).filled}
			</i>
		</div>
		<div class="input" class:focused>
			{#if !focused && !value}
				<p class="placeholder">
					{label || 'placeholder'}
				</p>
			{/if}
			<input
				bind:this={input}
				bind:value
				type="text"
				on:click|stopPropagation={openDatePicker}
				on:input={handleInput}
				placeholder=""
				{required}
			/>
		</div>
	</div>
</div>
{#if showInfo}
	<FieldInfo on:close title={label} message={description} on:close={() => (showInfo = false)} />
{/if}

<style lang="scss">
	@import './style';
</style>
