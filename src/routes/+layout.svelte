<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Intro from '$lib/components/Intro.svelte';
</script>

<AppShell slotSidebarLeft="w-1/3">
	<svelte:fragment slot="sidebarLeft">
		<Intro />
	</svelte:fragment>
	<slot />
</AppShell>
