<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Tab from './Tab.svelte';
</script>

<ion-tab-bar class="container">
	<Tab path="/catalog" icon="fast-food" />
	<span class="tab-separator" />
	<Tab path="/offers" icon="pricetags" />
	<span class="tab-separator" />
	<Tab path="/profile" icon="person" />
</ion-tab-bar>

<style>
	.container {
		display: flex;
		height: 50px;
		box-shadow: 0px -4px 4px rgba(0, 15, 159, 0.22);
		z-index: 1;
		background-color: white;
	}

	.tab-separator {
		width: 2px;
		height: 75%;
		align-self: center;
		content: '';
		background-color: rgba(0, 15, 159, 0.1);
		display: block;
	}
</style>
