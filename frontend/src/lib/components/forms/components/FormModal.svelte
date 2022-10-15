<script lang="ts">
	import InfinitySpinner from '$lib/components/common/InfinitySpinner.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import TitleBar from '$lib/components/common/TitleBar.svelte';
	export let title = '';
	export let hasClose = false;
	export let hasConfirm = true;
	export let hasDelete = true;
	export let loading = false;
	const dispatch = createEventDispatcher();
	const handleAcept = () => dispatch('accept', 'OK');

	let current: HTMLElement;
	onMount(() => {
		let inputs: any =
			current.querySelectorAll(
				'input:not([type=radio]), input:not([readonly=true]), input:not([readonly="true"]),input:not([readonly]) '
			) || [];
		if (inputs.length > 0) {
			if (!hasDelete) inputs[0].focus(); // focus first input if no delete button
		}
	});
</script>

<div class="FormModal" bind:this={current} transition:fade>
	<div class="FormModal-content" class:paddingWithClose={hasClose}>
		<div class="navbar">
			<TitleBar icon="Dismiss" {title} on:close />

			<div class="tools">
				{#if hasDelete}
					<span on:click={() => dispatch('delete')}> Eliminar </span>
				{/if}
				<slot name="tools" />
			</div>
		</div>

		<div class="child">
			<slot>no FormModal</slot>
		</div>
		{#if hasConfirm}
			<div class="toolbar">
				<button class="confirm" on:click={handleAcept}>
					<h4>Confirmar</h4>
				</button>
				{#if loading}
					<div class="loading">
						<InfinitySpinner size={24} />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.FormModal {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 109;
		justify-content: center;
		align-items: center;
		justify-content: center;
		overflow: auto;
	}
	.FormModal-content {
		border-radius: 5px;
		position: relative;
		min-height: 300px;
		width: 450px;
		max-height: 95vh;
		max-width: 95vw;
		background: var(--background-color);
		color: var(--text-color);
		display: grid;
		place-content: start;
		overflow: hidden;
		padding: 1rem;
		gap: 1rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		@media screen and (max-width: 768px) {
			border-radius: 0px;
			max-height: 100vh;
			max-width: 100vw;
			width: 100vw;
			height: 100vh;
		}
	}
	.navbar {
		display: grid;
		grid-template-columns: 1fr auto;
		place-items: center start;
		gap: 1rem;
		z-index: 9;
		position: sticky;
		top: 0;
		background: var(--background-color);
		font-weight: bold;
		.tools {
			color: var(--error-color);
		}
	}
	.toolbar {
		background-color: inherit;
		position: sticky;
		bottom: 0;
		display: flex;
		place-content: end;
		place-items: center;
		position: relative;
		button {
			padding: 1rem;
			color: var(--primary-color);
			background-color: var(--secondary-color);
			width: 100%;
			border-radius: 20px;
			font-weight: 600;
		}
		.loading {
			position: absolute;
			display: flex;
			place-content: center;
			place-items: center;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(#000, 0.1);
			z-index: 1;
		}
	}

	.child {
		overflow: auto;
	}
</style>
