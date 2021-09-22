<script>
	import { tabs } from '../stores/main';
	import Tab from './Tab.svelte';
</script>

<ion-tab-bar class="container">
	{#if $tabs.length}
		{#each $tabs as tab, idx}
			<Tab path={tab.path} icon={tab.icon} action={tab.action} isLastTab={$tabs.length - 2 < idx} />
		{/each}
	{:else}
		<Tab path="/catalog" icon="fast-food" />
		<Tab path="/offers" icon="pricetags" />
		<Tab path="/profile" icon="person" isLastTab />
	{/if}
</ion-tab-bar>

<style>
	.container {
		display: flex;
		height: 50px;
		box-shadow: 0px -4px 4px rgba(0, 15, 159, 0.22);
		z-index: 1;
		background-color: white;
	}
</style>
