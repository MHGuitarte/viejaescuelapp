<script>
	import { onMount } from 'svelte';

	import Tabs from '../components/Tabs.svelte';

	let hasTabs = false;

	onMount(() => {
		hasTabs =
			window.location.pathname.includes('login') || window.location.pathname.includes('scanner');
	});
</script>

<ion-app>
	<ion-content fullscreen>
		<slot />
	</ion-content>
	{#if !hasTabs}
		<Tabs />
	{/if}
</ion-app>
