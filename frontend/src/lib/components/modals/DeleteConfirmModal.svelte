<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from '../common/Modal.svelte';
	export let title: string;
	export let message: string;
	const dispatch = createEventDispatcher();
</script>

<Modal {title} on:close>
	<h4>
		{message}
	</h4>
	<div class="details">
		
		<div>
			<button on:click={() => dispatch('confirm')}> Confirmar </button>
		</div>
		<div>
			<button class="error" on:click={() => dispatch('cancel')}> Cancelar </button>
		</div>
	</div>
</Modal>

<style lang="scss">
	.details {
		padding: 0.5rem;
		display: grid;
		gap: 1rem;
		select {
			border-radius: 6px;
			padding: 0.5rem;
			border: 1px solid #ccc;
			option {
				padding: 0.5rem 1rem;
				&:hover {
					background-color: #ccc;
				}
			}
		}
		button {
			padding: 0.5rem;
			box-shadow: var(--box-shadow-main);
			background-color: var(--primary-color);
			color: var(--text-color-on-primary);
			border-radius: 20px;
		}
		.error {
			background-color: red;
		}
	}
</style>
