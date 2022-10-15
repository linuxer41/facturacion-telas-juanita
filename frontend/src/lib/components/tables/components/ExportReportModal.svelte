<script lang="ts">
	import Modal from '$lib/components/common/Modal.svelte';
	import { getIcon } from '$lib/core/icons';
	import { createEventDispatcher } from 'svelte';
	export let title = '';
	const dispatch = createEventDispatcher();
	let exportOptions = [
		{
			label: 'Excel',
			key: 'excel',
			icon: 'ArrowCircleDownSplit',
			is_active: true
		},
		{
			label: 'CSV',
			key: 'csv',
			icon: 'ArrowCircleDownSplit',
			is_active: false
		},
		{
			label: 'Json',
			key: 'json',
			icon: 'ArrowCircleDownSplit',
			is_active: false
		}
	];
	function onExport(option) {
		if (option.is_active) {
			dispatch('export', option.key);
		}
	}
</script>

<Modal on:close {title}>
	<ul>
		{#each exportOptions as option}
			<li class:inactive={!option.is_active} on:click={() => onExport(option)}>
				<i class="icon">{@html getIcon({ name: option.icon }).outlined}</i>
				<p>{option.label}</p>
				<i class="icon icon-16">
					{@html getIcon({ name: 'ChevronRight' }).outlined}
				</i>
			</li>
		{/each}
	</ul>
</Modal>

<style lang="scss">
	ul {
		display: grid;
		gap: 1rem;
		li {
			display: grid;
			gap: 1rem;
			grid-template-columns: auto 1fr auto;
			place-content: center;
			padding: 0.5rem;
		}
		.inactive {
			opacity: 0.25;
		}
	}
</style>
