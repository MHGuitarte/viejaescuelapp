<script>
	import { createEventDispatcher } from 'svelte';

	export let title = '';
	export let hasSearchBar = false;
	export let hasBackButton = false;

	let searchValue;
	let cartItemsLength = 16;

	const dispatch = createEventDispatcher();

	const handleChange = (evt) => dispatch('change', evt.target.value);
	const goBack = () => dispatch('goBack');
</script>

<ion-toolbar>
	<ion-row class="toolbar-content">
		<ion-col size="2">
			{#if hasBackButton}
				<ion-icon icon="arrow-back" size="large" on:click={goBack} />
			{/if}
		</ion-col>
		<ion-col size="8">
			{#if hasSearchBar}
				<ion-searchbar
					show-clear-button="focus"
					animated
					placeholder="Buscar..."
					automcomplete="on"
					inputmode="search"
					value={searchValue}
					on:ionChange={handleChange}
				/>
			{:else}
				<ion-title>{title}</ion-title>
			{/if}
		</ion-col>
		<ion-col size="2">
			<ion-icon icon="cart" size="large" />
			<ion-badge>
				{cartItemsLength > 10 ? "10+" : cartItemsLength}
			</ion-badge>
		</ion-col>
	</ion-row>
</ion-toolbar>

<style lang="scss">
	.toolbar-content {
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid black;

		ion-col {
			text-align: center;
			justify-content: center;
		}

		ion-searchbar {
			text-align: left;
		}
	}
	ion-badge {
		position: absolute;
		right: 4px;
		border-radius: 100px;
		font-size: x-small;
	}
</style>
