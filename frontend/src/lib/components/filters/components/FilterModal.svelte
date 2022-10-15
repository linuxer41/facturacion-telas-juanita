<script lang="ts">
	import TitleBar from '$lib/components/common/TitleBar.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let title = '';
	export let filterCount = 0;
	const dispatch = createEventDispatcher();
</script>

<div class="modal" transition:fade>
	<div class="modal-content">
		<div class="navbar">
			<TitleBar icon="Dismiss" {title} on:close />
			{#if filterCount}
				<h4 class="clear" on:click={() => dispatch('clear')}>Limpiar</h4>
			{/if}
		</div>

		<div class="child">
			<slot>no modal</slot>
		</div>
		<div class="bottom">
			<button
				class:disabled={!filterCount}
				on:click={() => {
					dispatch('apply');
				}}
				>Aplicar filtro
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.modal {
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
	.modal-content {
		border-radius: 5px;
		position: relative;
		min-height: 300px;
		width: 500px;
		height: 95vh;
		background: var(--background-color);
		color: var(--text-color);
		display: grid;
		overflow: hidden;
		grid-template-columns: 1fr;
		grid-template-rows: 60px 1fr 50px;
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
		grid-template-columns: auto 1fr auto;
		place-items: center start;
		gap: 1rem;
		z-index: 9;
		padding: 4px;
		position: sticky;
		top: 0;
		background: var(--background-color);
		font-size: 14px;
		font-weight: bold;
		.clear {
			color: var(--error-color);
			padding: 0.5rem;
			cursor: pointer;
		}
	}
	.child {
		height: 100%;
		overflow: auto;
	}
	.bottom {
		padding: 1rem;
		button {
			width: 100%;
			height: 100%;
			background-color: var(--secondary-color);
			color: var(--primary-color);
			box-shadow: var(--shadow-shadow-main);
			border-radius: 6px;
		}
		.disabled {
			background-color: inherit;
			color: inherit;
			border: 1px solid var(--secondary-color);
			opacity: 0.5;
		}
	}
</style>
