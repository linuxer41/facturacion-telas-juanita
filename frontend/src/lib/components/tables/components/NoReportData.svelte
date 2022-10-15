<script lang="ts">
	export let message = '';
</script>

<div class="no_data">
	<img src="/undraw/undraw_no_data_re_kwbl.svg" alt="" height="150" width="150" />
	<p>{message || ''}</p>
</div>

<style lang="scss">
	.no_data {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		place-content: center;
		place-items: center;

		font-size: 0.9rem;
	}
</style>
