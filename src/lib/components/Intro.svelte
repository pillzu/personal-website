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

<div
	class="grid relative items-center p-5 m-auto w-full h-full grid-rows-[1fr_2fr_2fr_1fr_0.5fr] max-md:m-0 max-md:pb-0"
>
	<!-- Header -->
	{#if visible}
		<div class="w-full" in:fade>
			<div class="flex flex-row justify-between items-center">
				<Avatar src={ProfileSrc} alt="Piyush Upadhyay" width="w-24 max-xl:w-20" />
				<LightSwitch />
			</div>
			<h3 class="py-4 max-xl:py-2 h3 max-xl:h4">Piyush Upadhyay</h3>
			<hr class="!border-solid" />
		</div>
		<!-- About me -->
		<div
			class="self-center tracking-wider max-lg:text-center max-md:self-center max-lg:self-start max-md:pt-0"
			in:blur={{ delay: 500 }}
		>
			<h4
				class="pb-2 font-black underline max-xl:pb-3 h4 decoration-wavy underline-offset-8 decoration-tertiary-600 max-xl:h6"
			>
				Hello there!
			</h4>
			<p class="m-auto text-base max-xl:text-xs max-md:text-sm max-lg:max-w-lg">
				Howdy, fellow digital explorers! 🚀 I'm Piyush, a 404 Magician and the eternal arch nemesis
				of our old enemy: <b>sneaky semicolon.</b>
				☕️ <br />Jokes apart, I am an explorer in the world of Computer Science, diving into
				building interesting applications day in and day out! If you have any ideas,
				<b>Send a Yoohoo</b>
				my way and I'll make sure we can bring that half-baked idea to fruition 🥭 (mango is my favourite)
				<br />
			</p>
		</div>
		<!-- Essential Stats -->
		<div
			class="self-center h-full tracking-wider max-lg:text-center max-md:self-center max-lg:self-start max-md:pt-0"
			in:blur={{ delay: 500 }}
		>
			<h4
				class="pb-2 font-black underline max-xl:pb-2 h4 decoration-wavy underline-offset-8 decoration-tertiary-600 max-xl:h6"
			>
				Essential Stats
			</h4>
			<div
				class="grid grid-cols-3 grid-flow-row p-5 h-5/6 text-center max-lg:grid-cols-2 max-lg:grid-rows-3 max-xl:gap-4 max-xl:text-xs max-md:text-sm"
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
					<span class="code">Graduation</span> <br /> 2025
				</span>
			</div>
		</div>
		<!-- Call to action -->
		<div class="flex flex-row flex-wrap gap-5 justify-around place-items-center max-md:self-center">
			<a
				href="mailto:p3upadhy@uwaterloo.ca?subject=Awesome%20website%20man!&body=Hey%20Piyush%0D%0AJust%20wanted%20to%20drop%20by%20and%20say%20'Yoohooo'!%20How's%20it%20going?%0A%0A"
				class="gap-2 py-5 px-5 font-bold max-xl:text-xs max-xl:py-3 max-xl:px-2 max-md:py-3 max-md:px-2 max-md:text-sm btn variant-ghost-primary"
				in:scale={{ delay: 1250 }}>👋 Send me a Yoohoo 👋</a
			>
			<a
				href="/PiyushUpadhyayResume.pdf"
				target="_blank"
				class="py-5 px-5 font-bold max-xl:text-xs max-xl:py-3 max-xl:px-2 max-md:py-3 max-md:px-2 max-md:text-sm btn variant-ghost-error"
				in:scale={{ delay: 1500 }}>📃 Got Any Experience? 📃</a
			>
		</div>

		<!-- Social Icons -->
		<div
			class="flex flex-row justify-around items-end w-full h-full text-xl max-xl:text-base max-md:pt-10"
			in:fly={{ y: 5, delay: 1500 }}
		>
			<a href="https://github.com/pillzu" class=""><i class="fa-brands fa-github" /></a>
			<a href="https://twitter.com/pillzzu" class=""><i class="fa-brands fa-x-twitter" /></a>
			<a href="https://www.linkedin.com/in/piup/" class=""><i class="fa-brands fa-linkedin" /></a>
			<a
				href="https://github.com/pillzu/personal-website"
				class="text-base underline transition-colors decoration-wavy decoration-secondary-500 underline-offset-4 max-xl:text-sm hover:decoration-tertiary-500"
				>Source</a
			>
		</div>
	{/if}
</div>
