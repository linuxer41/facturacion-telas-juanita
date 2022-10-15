<script>
	import CotizacionsTable from '$lib/components/tables/CotizacionesTable.svelte';

	const title = 'Cotizaciones';
</script>

<div class="route">
	<CotizacionsTable {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
