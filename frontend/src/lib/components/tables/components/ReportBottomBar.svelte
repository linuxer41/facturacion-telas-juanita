<script lang="ts">
	import { getIcon } from '$lib/core/icons';
	import { createEventDispatcher } from 'svelte';
	export let count = 0;
	export let page = 1;
	export let limit = 50;
	const dispatch = createEventDispatcher();
</script>

<div class="bottom">
	<div>
		<span
			>{count || 0} (
			<span>
				{page} - {Math.ceil(count / limit)}
			</span>
			)</span
		>
	</div>
	<div class="paginate">
		<i class="icon icon-24" class:inactive={page <= 1} on:click={() => dispatch('first')}>
			{@html getIcon({ name: 'ArrowPrevious' }).outlined}
		</i>
		<i class="icon icon-24" class:inactive={page <= 1} on:click={() => dispatch('prev')}>
			{@html getIcon({ name: 'ArrowCircleLeft' }).outlined}
		</i>
		<i
			class="icon icon-24"
			class:inactive={page >= Math.ceil(count / limit)}
			on:click={() => dispatch('next')}
		>
			{@html getIcon({ name: 'ArrowCircleRight' }).outlined}
		</i>
		<i
			class="icon icon-24"
			class:inactive={page >= Math.ceil(count / limit)}
			on:click={() => dispatch('last')}
		>
			{@html getIcon({ name: 'ArrowNext' }).outlined}
		</i>
	</div>
</div>

<style lang="scss">
	.bottom {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		.paginate {
			display: grid;
			grid-auto-flow: column;
			gap: 1rem;
		}
		.inactive {
			opacity: 0.5;
		}
	}
</style>
