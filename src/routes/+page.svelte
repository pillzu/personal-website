<script lang="ts">
	import { fade, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	let visible = false;

	export let data: PageData;
	$: posts = data.posts;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Piyush Upadhyay</title>
</svelte:head>

{#if visible}
	<section class="flex flex-col p-5">
		<div class="pt-5 pb-10 text-3xl font-black tracking-widest leading-relaxed">
			<h2 class="pb-5 transition-all h2 font-display max-xl:h3">My Ephemeral Knowledge Base</h2>
			<blockquote class="text-lg font-thin tracking-normal blockquote max-xl:text-base">
				Every now and then, my mind suggests something so <span class="font-black">✨ whack ✨</span
				> that it would be a mistake if I didn't share it with this world. Thus, here's an assortment
				of some of those thoughts for you to explore!
			</blockquote>
		</div>
		<ul class="flex flex-col gap-10" in:fade={{ delay: 500 }}>
			{#each posts as post, i (i)}
				<a href={'/posts/' + post.slug} class="">
					<span class="flex flex-row justify-between pb-5">
						<h2 class="font-black transition-all h2 max-xl:h3">{post.title}</h2>
						<p class="text-surface-300 max-xl:text-base dark:text-surface-400">
							{formatDate(post.date)}
						</p>
					</span>
					<p class="max-xl:text-sm">{post.description}</p>
				</a>
				<hr />
			{/each}
		</ul>
	</section>
{/if}
