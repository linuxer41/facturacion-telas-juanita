<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';
	import TitleBar from './TitleBar.svelte';
	export let message = '';
	export let title = '';
	export let type: 'alert' | 'confirm' = 'alert';
	const dispatch = createEventDispatcher();
</script>

<div class="overlay" transition:fade>
	<div class="dialog">
		<TitleBar icon="" {title} on:close={() => dispatch('cancel')} />
		<div class="message">
			{#if message}
				{#if type === 'alert'}
					{message}
				{:else}
					{message}
				{/if}
			{:else}
				<slot />
			{/if}
		</div>
		<div class="buttons">
			<button class="cancel" on:click|preventDefault={() => dispatch('cancel')}>Cancelar</button>
			<button class="confirm" on:click|preventDefault={() => dispatch('confirm')}>Aceptar</button>
		</div>
	</div>
</div>

<style lang="scss">
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-content: center;
		.dialog {
			width: 300px;
			//height: 100px;
			display: grid;
			gap: 10px;
			padding: 1rem;
			border-radius: 6px;
			background-color: var(--background-color);
			color: black;
			.buttons {
				display: grid;
				// grid-auto-flow: column;
				grid-template-columns: 1fr 1fr;
				gap: 10px;
				// place-content: end;
				// place-items:  end;
				button {
					// border: 1px solid var(--border-color);
					padding: 0.5rem 1rem;
					border-radius: 20px;
					box-shadow: var(--box-shadow-main);
					cursor: pointer;
					width: 100%;
					// font-size: 1.2rem;
				}
				.confirm {
					color: var(--text-color-on-primary);
					background-color: var(--success-color);
				}
				.cancel {
					background-color: var(--error-color);
					color: var(--text-color-on-primary);
				}
			}
		}
	}
</style>
