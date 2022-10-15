<script lang="ts">
	import FacturasTable from '$lib/components/tables/FacturasTable.svelte';

	const title = 'Facturas';
</script>

<div class="route">
	<FacturasTable {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
