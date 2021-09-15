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

<ion-card on:click={handleClick} class="card-container" style="--background: url({bgImage})" />

<style lang="scss">
	.card-container {
		aspect-ratio: 21 / 9;
		display: flex;
		flex-flow: column-reverse;
		margin: 40px 20px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
        background-color: white;
	}

</style>
