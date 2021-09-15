<script>
	import Tabs from '../components/Tabs.svelte';
	import { hasTabs } from '../stores/main';

	let showTabs = false;

	hasTabs.subscribe((value) => (showTabs = value));
</script>

<ion-app>
	<ion-content fullscreen id="main-content">
		<slot />
	</ion-content>

	{#if showTabs}
		<Tabs />
	{/if}
</ion-app>

<style lang="scss" global>
	#main-content {
		--background: rgba(242, 220, 177, 0.5);

		* {
			font-family: 'Endor';
			color: brown;

			.title {
				font-weight: bolder;
				font-size: xx-large;
			}
		}
	}
</style>
