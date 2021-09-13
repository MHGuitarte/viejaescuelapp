<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let path;
	export let icon;
</script>

<ion-tab-button
	class:tab-selected={$page.path === path}
	on:click={() => {
		goto(path);
	}}
>
	<ion-icon {icon} />
</ion-tab-button>

<style>
	.tab-selected {
		color: #000f9f;
	}
</style>
