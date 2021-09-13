<script>
	import { goto } from '$app/navigation';
	import Toolbar from '../components/Toolbar.svelte';

	import { onMount } from 'svelte';

	import { userStore } from '../stores/user';

	onMount(() => {
		if (!userStore) {
			goto('/login');
		}
	});
</script>

<Toolbar title="Ofertas" />

<h1> EOOOOO </h1>

<style lang="scss">
</style>
