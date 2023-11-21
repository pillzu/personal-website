<script lang="ts">
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import ProfileSrc from '$lib/assets/profile.jpg';

	import { fade, scale, blur, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<div class="grid grid-rows-6 items-center p-10 m-auto h-full max-xl:pl-5">
	<!-- Header -->
	{#if visible}
		<div class="w-full" in:fade>
			<div class="flex flex-row justify-between items-center">
				<Avatar src={ProfileSrc} alt="Piyush Upadhyay" width="w-24 max-xl:w-20" />
				<LightSwitch />
			</div>
			<h3 class="py-4 h3 max-xl:h4">Piyush Upadhyay</h3>
			<hr class="!border-solid" />
		</div>
		<!-- About me -->
		<div class="row-span-3 self-center pt-16 tracking-wider" in:blur={{ delay: 500 }}>
			<h4
				class="pt-7 pb-5 font-black underline max-xl:pt-10 max-xl:pb-4 h4 decoration-wavy underline-offset-8 decoration-tertiary-600 max-xl:h6"
			>
				Hello there!
			</h4>
			<p class="text-base max-xl:text-xs">
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
				ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
				officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
				dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
				nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
				officia voluptate.
			</p>
			<h4
				class="pt-7 pb-5 font-black underline max-xl:pt-2 h4 decoration-wavy underline-offset-8 decoration-tertiary-500 max-xl:h6"
			>
				Essential Stats
			</h4>
			<div
				class="grid grid-cols-3 grid-rows-2 gap-4 text-center max-xl:gap-2 max-xl:text-xs"
				in:fade={{ delay: 1000 }}
			>
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
					<span class="code">University</span> <br /> University of Waterloo
				</span>
				<span>
					<span class="code">GPA </span> <br /> 3.7
				</span>
				<span>
					<span class="code">Blogs</span> <br /> 0
				</span>
			</div>
		</div>
		<!-- Call to action -->
		<div
			class="flex flex-row row-span-2 gap-5 place-items-center max-xl:pt-12 max-xl:flex-col max-xl:gap-3"
		>
			<a
				href="mailto:p3upadhy@uwaterloo.ca?subject=Awesome%20website%20man!&body=Hey%20Piyush%0D%0AJust%20wanted%20to%20drop%20by%20and%20say%20'Yoohooo'!%20How's%20it%20going?%0A%0A"
				class="py-5 px-5 font-bold max-xl:text-xs max-xl:py-3 max-xl:px-2 btn variant-ghost-primary"
				in:scale={{ delay: 1250 }}>👋 Send me a Yoohoo 👋</a
			>
			<a
				href="/"
				class="py-5 px-5 font-bold max-xl:text-xs max-xl:py-3 max-xl:px-2 btn variant-ghost-error"
				in:scale={{ delay: 1500 }}>📃 What have I done till now? 📃</a
			>
		</div>

		<!-- Social Icons -->
		<div
			class="flex flex-row justify-around w-full h-full text-xl max-xl:text-sm"
			in:fly={{ y: 5, delay: 1500 }}
		>
			<a href="/" class=""><i class="devicon-github-original" /></a>
			<a href="/" class=""> <i class="devicon-twitter-original" /></a>
			<a href="/" class=""><i class="devicon-linkedin-plain" /></a>
			<a
				href="/"
				class="text-base underline transition-colors decoration-wavy decoration-secondary-500 underline-offset-4 max-xl:text-sm hover:decoration-tertiary-500"
				>Source</a
			>
		</div>
	{/if}
</div>
