<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	export let value: number;
	export let label: string;
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
		{#if !value && [null, undefined, ''].includes(String(value))}
			{''}
		{:else}
			{label || 'label'}
		{/if}
	</label>

	<div class="input" class:focused>
		{#if !focused && [null, undefined, ''].includes(String(value))}
			<p class="placeholder">
				{label || 'placeholder'}
			</p>
		{/if}
		<input
			bind:this={input}
			on:focus={onFocus}
			on:blur={onBlur}
			type="number"
			placeholder=""
			step="0.01"
			bind:value
			on:input
		/>
	</div>
</div>

<style lang="scss">
	@import './style';
</style>
