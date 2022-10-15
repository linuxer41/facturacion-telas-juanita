<script lang="ts">
	import { getIcon } from '$lib/core/icons';
	export let name = 'ChevronLeft';
	export let icon_type: 'primary' | 'secondary' = 'secondary';
</script>

<i class="rounded-icon icon-20 {icon_type}-icon" on:click>
	{@html getIcon({ name }).filled}
</i>
