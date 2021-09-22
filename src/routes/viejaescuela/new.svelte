<script>
	import { goto } from '$app/navigation';
	import { activeFormPage } from '../../stores/character';
	import { onMount } from 'svelte';
	import { hasTabs, tabs } from '../../stores/main';
	import Divider from '../../components/Divider.svelte';

	onMount(() => {
		hasTabs.set(true);
		tabs.set([
			{
				action: () => activeFormPage.set('main'),
				icon: 'person'
			},
			{
				action: () => activeFormPage.set('background'),
				icon: 'at'
			},
			{
				action: () => activeFormPage.set('talents'),
				icon: 'star'
			},
			{
				action: () => activeFormPage.set('stats'),
				icon: 'barbell'
			},
			{
				action: () => activeFormPage.set('abilities'),
				icon: 'flash'
			},
			{
				action: () => activeFormPage.set('inventory'),
				icon: 'diamond'
			}
		]);
		activeFormPage.set('main');
	});

	const goBack = () => goto('/viejaescuela');
	const createCharacter = () => {
		goto('/viejaescuela');
	};
</script>

<ion-row style="margin-top: 20px; margin-bottom: 20px;">
	<ion-col size="2" class="top-button-container" style="padding-left: 16px;">
		<ion-button
			class="go-back-button round-button title-positioned"
			color="danger"
			on:click={goBack}
		>
			<ion-icon name="close" />
		</ion-button>
	</ion-col>
	<ion-col size="8" style="text-align: center;">
		<h1 class="title">Vieja Escuela</h1>
	</ion-col>
	<ion-col size="2" class="top-button-container" style="padding-right: 16px;">
		<ion-button
			class="add-character-button round-button title-positioned"
			color="success"
			on:click={createCharacter}
		>
			<ion-icon name="checkmark" />
		</ion-button>
	</ion-col>
</ion-row>

<ion-row>patata</ion-row>
<Divider />
<ion-row>
	{#if $activeFormPage === 'background'}
		<h1>BACKGROUND</h1>
	{:else if $activeFormPage === 'talents'}
		<h1>TALENTS</h1>
	{:else if $activeFormPage === 'stats'}
		<h1>STATS</h1>
	{:else if $activeFormPage === 'abilities'}
		<h1>ABILITIES</h1>
	{:else if $activeFormPage === 'inventory'}
		<h1>INVENTORY</h1>
	{:else}
		<h1>MAIN</h1>
	{/if}
</ion-row>

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
