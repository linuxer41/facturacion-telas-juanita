<script>
	import ProductosTable from '$lib/components/tables/ProductosTable.svelte';

	const title = 'Productos';
</script>

<div class="route">
	<ProductosTable {title} />
</div>

<style lang="scss">
	.route {
		display: grid;
	}
</style>
