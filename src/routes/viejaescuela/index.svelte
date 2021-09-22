<script>
	import { hasTabs, tabs } from '../../stores/main';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let slides;

	onMount(() => {
		hasTabs.set(true);
		tabs.set([
			{
				path: '/viejaescuela',
				icon: 'home'
			},
			{
				path: '/viejaescuela/master',
				icon: 'clipboard'
			},
			{
				path: '/utilities/dices',
				icon: 'dice'
			}
		]);

		slides.options = {
			initialSlide: 1,
			speed: 400
		};
	});

	const goBack = () => goto('/');
	const createCharacter = () => goto('/viejaescuela/new');
	const selectCharacter = (character) => goto(`/viejaescuela/${character}`);
</script>

<ion-row style="margin-top: 20px; margin-bottom: 20px;">
	<ion-col size="2" class="top-button-container" style="padding-left: 16px;">
		<ion-button class="go-back-button round-button title-positioned" on:click={goBack}>
			<ion-icon name="arrow-back-outline" />
		</ion-button>
	</ion-col>
	<ion-col size="8" style="text-align: center;">
		<h1 class="title">Vieja Escuela</h1>
	</ion-col>
	<ion-col size="2" class="top-button-container" style="padding-right: 16px;">
		<ion-button
			class="add-character-button round-button title-positioned"
			on:click={createCharacter}
		>
			<ion-icon name="add" />
		</ion-button>
	</ion-col>
</ion-row>

<ion-slides pager="true" bind:this={slides}>
	<ion-slide style="border: 1px solid black;">
		<h1>Slide 1</h1>
		<br />
		<hr />
	</ion-slide>

	<ion-slide style="border: 1px solid black;">
		<h1>Slide 2</h1>
		<br />
		<hr />
	</ion-slide>

	<ion-slide style="border: 1px solid black;">
		<h1>Slide 3</h1>
		<br />
		<hr />
	</ion-slide>
</ion-slides>

<style scoped lang="scss">
	.round-button {
		--border-radius: 100%;
		width: 48px;
		height: 48px;
	}

	.top-button-container {
		display: flex;
		align-items: center;
	}
</style>
