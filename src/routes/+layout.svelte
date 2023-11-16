<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { title } from '$lib/config';
</script>

<AppShell slotFooter="p-3 grid-cols-3">
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="transparent"
			class="text-md"
		>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl">{title}</strong>
				</a>
			</svelte:fragment>

			<a class="pr-5" href="/blog">Blog</a>
			<a class="" href="/about">About</a>

			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<hr class="!border-solid pb-5" />
		Piyush Upadhyay @ 2023
	</svelte:fragment>
	<slot />
</AppShell>
