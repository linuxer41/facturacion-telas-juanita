<script lang="ts">
	import { getIcon } from '$lib/core/icons';
	import { createEventDispatcher, onMount } from 'svelte';
	import FieldInfo from './FieldInfo.svelte';
	export let value: string | number;
	export let label: string;
	export let showInfo = false;
	export let description: string;
	let focused: boolean = false;
	let input: HTMLInputElement;

	let blink = false;
	const dispatch = createEventDispatcher();
	let interval = null;

	function onFocus() {
		focused = true;
		blink = true;
	}

	function onBlur() {
		focused = false;
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

	<div class="input" class:focused>
		{#if !focused && !value}
			<p class="placeholder">
				{label || 'placeholder'}
			</p>
		{/if}
		<input
			bind:this={input}
			on:focus={onFocus}
			on:blur={onBlur}
			type="text"
			placeholder=""
			value={value || ''}
			on:input={(e) => (value = e.currentTarget.value.toUpperCase())}
		/>
	</div>
</div>
{#if showInfo}
	<FieldInfo on:close title={label} message={description} on:close={() => (showInfo = false)} />
{/if}

<style lang="scss">
	@import './style';
</style>
