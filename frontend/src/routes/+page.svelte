<script lang="ts">
	import { formatCurrency } from '$lib/core/utils';

	import CartPanel from '$lib/components/common/CartPanel.svelte';
	import { emptyCart } from '$lib/core/api_tools';
	import { cartsHistory } from '$lib/core/store';

	let focusedItem: CartItem;
	let cart: Cart = emptyCart();
	function selectFromHistory(_cart: Cart, index: number) {
		const _cartsHistory = $cartsHistory;
		if ((_cartsHistory || []).length > 0) {
			cart = _cart;
			// remove from history
			_cartsHistory.splice(index, 1);
			cartsHistory.sync(_cartsHistory);
		}
	}
</script>

<div class="route">
	<div class="info">
		<div class="details">
			{#each cart.items as item}
				<h1>
					<span>
						{item.name}
					</span>
					<hr />
					<span>
						({item.quantity || 0} x {formatCurrency(item.price || 0)}) - {formatCurrency(
							item.discount || 0
						)} = {formatCurrency(item.subtotal)}
					</span>
				</h1>
			{/each}
		</div>

		<div class="cliente">
			<h1>Total: {formatCurrency(cart.montoTotal)}</h1>
			<h1>
				NIT/CI:
				{cart.cliente?.nit || ''}
			</h1>
			<h1>
				Cliente:
				{cart.cliente?.name || ''}
			</h1>
			<h1>
				Correo:
				{cart.cliente?.email || ''}
			</h1>
		</div>

		<div class="history">
			<h4>Historial</h4>
			{#each $cartsHistory || [] as _cart, index}
				<div class="historyItem" on:click={() => selectFromHistory(_cart, index)}>
					<table>
						<thead>
							<tr>
								<th>Producto</th>
								<th>Cantidad</th>
								<th>Precio</th>
								<th>Descuento</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody>
							{#each _cart.items as item}
								<tr>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{formatCurrency(item.price)}</td>
									<td>{formatCurrency(item.discount)}</td>
									<td>{formatCurrency(item.subtotal)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/each}
		</div>
	</div>
	<CartPanel bind:focusedItem bind:cart />
</div>

<style lang="scss">
	.route {
		display: grid;
		grid-template-columns: 3fr 4fr;
		gap: 0.5rem;
	}
	.info {
		display: grid;
		grid-template-rows: 1fr auto 200px;
		gap: 0.5rem;
		overflow: hidden;
		padding: 0.5rem;
		.details {
			height: auto;
			overflow: auto;
		}
		.cliente {
			box-shadow: var(--box-shadow-main);
			padding: 0.5rem;
			border-radius: 0.5rem;
		}
		.history {
			display: grid;
			grid-template-rows: auto 1fr;
			gap: 0.5rem;
			height: 100%;
			overflow: auto;
			.historyItem {
				display: grid;
				gap: 0.5rem;
				border: 1px solid #ccc;
				table {
					height: min-content;
				}
			}
		}
	}
</style>
