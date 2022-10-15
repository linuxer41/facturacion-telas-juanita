<script>
	import { getIcon } from '$lib/core/icons';

	import { createEventDispatcher } from 'svelte';

	export let title = 'title';
	export let message = 'message';
	const dispatch = createEventDispatcher();
</script>

<div class="info">
	<div>
		<i class="icon icon-16" on:click={() => dispatch('close')}>
			{@html getIcon({ name: 'info' }).filled}
		</i>
	</div>
	<h3>
		{title}
	</h3>
	<p>
		{message}
	</p>
	<slot />
</div>

<style>
	.info {
		position: absolute;
		z-index: 9;
		background-color: var(--background-color-light);
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
		overflow: auto;
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
	}
</style>
