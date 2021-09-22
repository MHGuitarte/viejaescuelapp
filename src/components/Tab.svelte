<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let path;
	export let icon;
	export let action = () => {};
	export let isLastTab = false;
</script>

<ion-tab-button
	class:tab-selected={$page.path === path}
	on:click={() => {
		if (path) {
			goto(path);
		} else {
			action();
		}
	}}
>
	<ion-icon {icon} />
</ion-tab-button>

{#if !isLastTab}
	<span class="tab-separator" />
{/if}

<style>
	.tab-selected {
		color: #000f9f;
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
