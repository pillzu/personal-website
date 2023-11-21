<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Intro from '$lib/components/Intro.svelte';
	import { fade } from 'svelte/transition';

	export let data: string;
</script>

<AppShell slotSidebarLeft="w-1/3">
	<svelte:fragment slot="sidebarLeft">
		<Intro />
	</svelte:fragment>
	<!-- TODO: Add the vertical dividing line here -->
	<!-- <span class="posh-7/10 divider-vertical text-surface-500" /> -->
	{#key data.url}
		<div class="transition" in:fade>
			<slot />
		</div>
	{/key}
</AppShell>
