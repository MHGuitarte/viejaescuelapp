<script>
	import { goto } from '$app/navigation';
	import Toolbar from '../components/Toolbar.svelte';
	import { onMount } from 'svelte';
	import { userStore } from '../stores/user';
	import { categories } from '../mocks/categories';
import Card from '../components/Card.svelte';

	onMount(() => {
		if (!userStore) {
			goto('/login');
		}
	});
</script>

<Toolbar title="Catálogo" hasSearchBar on:change={event => console.log(event.detail)} />


{#each categories as category}
<Card title={category.name} href={`/catalog${category.slug}?sisi=nono&patata=2&nono=algo`} bgImage={category.image} />
{/each}
