<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="flex flex-col p-10">
	<a href="/" class="text-xl max-xl:text-lg">👈 Back</a>
	<article class="pl-10">
		<!-- Title -->
		<hgroup class="flex flex-col gap-2 pt-10">
			<h1 class="h1 max-xl:h2">{data.meta.title}</h1>
			<p class="text-primary-500 max-xl:text-sm">Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<!-- Tags -->
		<div class="pt-8 max-xl:text-sm">
			{#each data.meta.categories as category}
				<span class="py-2 px-5 rounded-full border-none variant-ghost-primary">&num;{category}</span
				>
			{/each}
		</div>

		<!-- Post -->
		<div class="pt-5 w-full prose">
			<svelte:component this={data.content} />
		</div>
	</article>
</section>
