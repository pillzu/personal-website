<script lang="ts">
	import { fade, scale, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Piyush Upadhyay</title>
</svelte:head>

{#if visible}
	<div class="flex flex-col place-items-center align-middle">
		<div
			class="text-6xl font-black tracking-widest leading-relaxed text-center md:pt-28 xl:pt-52 xl:text-8xl"
		>
			<h1 class="uppercase transition-all xl:pb-10" in:scale>Just another</h1>
			<h1 class="" in:fade={{ delay: 500 }}>☕ 404 Magician ☕</h1>
			<p class="pt-5 text-base font-thin tracking-normal xl:pt-10" in:blur={{ delay: 750 }}>
				✨ (Making <span class="code">problems</span> disappear since 2020) ✨
			</p>
		</div>

		<a href="/blog" class="mt-10 btn variant-ghost" in:fade={{ delay: 1500 }}>Click. Geek. Peek</a>
	</div>
{/if}
