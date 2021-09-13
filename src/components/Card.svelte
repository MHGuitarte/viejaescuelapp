<script>
	import { goto } from '$app/navigation';

	export let title;
	export let bgImage;
	export let href;

	const handleClick = () => {
		goto(href, {
			state: {
				title
			}
		});
	};
</script>

<ion-card on:click={handleClick} class="card-container" style="--background: url({bgImage})">
	<ion-card-header class="card-title-container">
		<ion-card-title>{title}</ion-card-title>
	</ion-card-header>
</ion-card>

<style lang="scss">
	.card-container {
		aspect-ratio: 21 / 9;
		display: flex;
		flex-flow: column-reverse;
		margin: 2px 0px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.card-title-container {
		* {
			font-size: xx-large;
		}
	}
</style>
