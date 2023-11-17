<script lang="ts">
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import ProfileSrc from '$lib/assets/profile.jpg';

	import { fade, scale, blur, slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<div class="grid grid-rows-6 place-items-center p-10 m-auto h-full">
	<!-- Header -->
	{#if visible}
		<div class="w-full" in:fade>
			<div class="flex flex-row justify-between">
				<Avatar src={ProfileSrc} style="filter: url({'#BlueNight'})" width="w-24" />
				<LightSwitch />
			</div>
			<h3 class="py-2 h3">Piyush Upadhyay</h3>
			<hr class="!border-solid" />
		</div>
		<!-- About me -->
		<div class="row-span-3 pt-16 tracking-wider" in:blur={{ delay: 500 }}>
			<h4
				class="pb-5 font-black underline h4 decoration-wavy underline-offset-8 decoration-primary-500"
			>
				Hello there!
			</h4>
			<p class="text-base">
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
				ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
				officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
				dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
				nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
				officia voluptate.
			</p>
			<h4
				class="pt-5 pb-8 font-black underline h4 decoration-wavy underline-offset-8 decoration-primary-500"
			>
				Essential Stats
			</h4>
			<div class="grid grid-cols-3 grid-rows-2 gap-4 text-center" in:fade={{ delay: 1000 }}>
				<span>
					<span class="code">Current Level</span> <br /> Bachelors
				</span>
				<span>
					<span class="code">Major</span> <br /> Computer Science
				</span>
				<span>
					<span class="code">Minor</span> <br /> Entrepreneurship
				</span>
				<span>
					<span class="code">Current University</span> <br /> University of Waterloo
				</span>
				<span>
					<span class="code">Grade Point Average</span> <br /> 3.7
				</span>
				<span>
					<span class="code">Blogs</span> <br /> 0
				</span>
			</div>
		</div>
		<!-- Call to action -->
		<div class="flex flex-row row-span-2 gap-5">
			<a href="/" class="py-5 px-5 font-bold btn variant-ghost-primary" in:scale={{ delay: 1250 }}
				>👋 Send me a Yoohoo 👋</a
			>
			<a href="/" class="py-5 px-5 font-bold btn variant-ghost-tertiary" in:scale={{ delay: 1500 }}
				>📃 What have I done till now? 📃</a
			>
		</div>

		<!-- Social Icons -->
		<div
			class="flex bottom-5 flex-row justify-around w-full text-xl"
			in:fly={{ y: 5, delay: 1500 }}
		>
			<a href="/" class=""><i class="devicon-github-original" /></a>
			<a href="/" class=""> <i class="devicon-twitter-original" /></a>
			<a href="/" class=""><i class="devicon-linkedin-plain" /></a>
			<a
				href="/"
				class="text-base underline decoration-wavy decoration-secondary-500 underline-offset-4"
				>Source</a
			>
		</div>
	{/if}
</div>
