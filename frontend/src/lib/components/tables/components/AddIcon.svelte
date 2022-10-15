<script lang="ts">
	import { getIcon } from '$lib/core/icons';
</script>

<div class="add" on:click>
	<i class="icon">
		{@html getIcon({ name: 'Add' }).filled}
	</i>
</div>

<style lang="scss">
	.add {
		margin-top: auto;
		display: grid;
		place-content: center;
		border-radius: 50%;
		position: absolute;
		place-self: end;
		bottom: 10px;
		right: 10px;
		height: 40px;
		width: 40px;
		background-color: var(--primary-color);
		color: var(--text-color-on-primary);
	}
</style>
