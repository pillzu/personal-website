<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Intro from '$lib/components/Intro.svelte';
</script>

<AppShell slotSidebarLeft="w-1/3">
	<svelte:fragment slot="sidebarLeft">
		<Intro />
	</svelte:fragment>
	<!-- TODO: Add the vertical dividing line here -->
	<!-- <span class="posh-7/10 divider-vertical text-surface-500" /> -->
	<slot />
</AppShell>
