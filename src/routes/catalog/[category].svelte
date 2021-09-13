<script>
	import { goto } from '$app/navigation';
	import { isWorking } from '$lib/router';

	import Toolbar from '../../components/Toolbar.svelte';

	let categoryName;

	isWorking();

	const workaround = location.pathname.split('/');
</script>

<Toolbar hasBackButton hasSearchBar on:goBack={() => goto('/catalog')} />
<ion-row>
	<h1>{workaround[workaround.length - 1]}</h1>
</ion-row>
