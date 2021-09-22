<script>
	import Tabs from '../components/Tabs.svelte';
	import { hasTabs } from '../stores/main';
</script>

<ion-app>
	<ion-content fullscreen id="main-content">
		<slot />
	</ion-content>

	{#if $hasTabs}
		<Tabs />
	{/if}
</ion-app>

<style lang="scss" global>
	@font-face {
		font-family: 'Endor';
		src: url('/fonts/endor.ttf');
	}
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
