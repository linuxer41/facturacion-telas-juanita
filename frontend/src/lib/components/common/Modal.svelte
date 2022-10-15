<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import TitleBar from './TitleBar.svelte';
	export let title = '';
	export let animated = true;
</script>

<div class="modal" transition:fade={{ duration: animated ? 500 : 0 }}>
	<div class="modal-content">
		<div class="topbar">
			<TitleBar icon="Dismiss" {title} on:close />
		</div>

		<div class="child">
			<slot>no modal</slot>
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
		height: auto;
		width: 650px;
		max-height: 95vh;
		max-width: 95vw;
		background: var(--background-color);
		color: var(--text-color);
		display: grid;
		overflow: hidden;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		padding: 1rem;
		.topbar {
			display: grid;
			grid-auto-flow: column;
			gap: 1rem;
			place-self: start;
		}
		@media screen and (max-width: 768px) {
			border-radius: 0px;
			max-height: 100vh;
			max-width: 100vw;
			width: 100vw;
			height: 100vh;
		}
	}
	.child {
		overflow: auto;
	}
</style>
