<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Intro from '$lib/components/Intro.svelte';
	import { fade } from 'svelte/transition';

	export let data;
	let size: number;
</script>

<svelte:window bind:innerWidth={size} />

<AppShell slotSidebarLeft="w-1/3 max-md:w-0">
	<!-- {#if size > 600} -->
	<svelte:fragment slot="sidebarLeft">
		{#if size > 600}
			<Intro />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		{#if size < 600 && data.url == '/'}
			<Intro />
		{/if}
	</svelte:fragment>
	<!-- {/if} -->
	<!-- TODO: Add the vertical dividing line here -->
	<!-- <span class="posh-7/10 divider-vertical text-surface-500" /> -->
	{#key data.url}
		<div class="transition">
			<slot />
		</div>
	{/key}
</AppShell>
