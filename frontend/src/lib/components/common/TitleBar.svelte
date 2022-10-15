<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	import ActionIcon from './ActionIcon.svelte';
	export let title = 'Titulo';
	export let icon = 'ChevronLeft';
	const dispatch = createEventDispatcher();
	function handleKeydown(event) {
		// event.preventDefault();
		const key = event.key;
		const keyCode = event.keyCode;
		if (key === 'Escape' || keyCode === 27) {
			dispatch('close');
		}
	}
</script>

<div class="topbar" class:no-icon-topbar={icon ? false : true}>
	{#if icon}
		<ActionIcon name={icon} on:click={() => dispatch('close')} />
	{/if}
	<h3 class:center={icon ? false : true}>{title || ''}</h3>
</div>

<!-- <svelte:window on:keydown|once|preventDefault={handleKeydown} /> -->
<style lang="scss">
	.topbar {
		display: grid;
		grid-template-columns: auto 1fr;
		place-content: center;
		place-items: center;
		gap: 1rem;
		// padding: 0rem 0.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		h3 {
			text-align: start;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100%;
		}
		.center {
			text-align: center;
		}
	}
	.no-icon-topbar {
		grid-template-columns: 1fr;
	}
</style>
