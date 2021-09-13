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

<Toolbar title="Perfil" />

<h1> UUUUUU </h1>
