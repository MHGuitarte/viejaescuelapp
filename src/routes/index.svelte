<script>
	import { onMount } from 'svelte';

	import { hasTabs } from '../stores/main';

	import GameCard from '../components/GameCard.svelte';

	import DnDLogo from '/logos/dnd_logo.png';
	import ViejaEscuelaLogo from '/logos/viejaescuela_logo.png';

	onMount(() => {
		hasTabs.set(false);
	});
</script>

<ion-row>
	<ion-col size="12" style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
		<h1 class="title">Selecciona un juego</h1>
	</ion-col>
	<ion-col size="12" push="0">
		<GameCard href="/viejaescuela" bgImage={ViejaEscuelaLogo} title="Vieja Escuela" />
		<GameCard href="/dnd" bgImage={DnDLogo} title="Dungeons & Dragons" />
	</ion-col>
</ion-row>
