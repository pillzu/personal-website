<script lang="ts">
	import { fade, scale, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;

	onMount(() => {
		visible = true;
		console.log('In onMount');
		console.log(visible);
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
			<h1 class="uppercase transition-all xl:pb-10 font-display" in:scale>Just another</h1>
			<h1 class="font-sans" in:fade={{ delay: 500 }}>☕ 404 Magician ☕</h1>
			<h1 class="pt-5 text-base font-medium tracking-normal xl:pt-10" in:blur={{ delay: 750 }}>
				✨ (Making <span class="code">problems</span> disappear since 2020) ✨
			</h1>
		</div>

		<a href="/blog" class="mt-10 btn variant-ghost" in:fade={{ delay: 1500 }}>Click. Geek. Peek</a>
	</div>
{/if}
