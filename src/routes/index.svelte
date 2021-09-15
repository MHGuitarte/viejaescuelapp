<script>
	import { onMount } from 'svelte';

	import { hasTabs } from '../stores/main';

	import GameCard from '../components/GameCard.svelte';

	import DnDLogo from '../../static/logos/dnd_logo.png';
	import ViejaEscuelaLogo from '../../static/logos/viejaescuela_logo.png';

	onMount(() => {
		hasTabs.update(false);
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

<style lang="scss">
	@font-face {
		font-family: 'Endor';
		src: url('../../static/fonts/endor.ttf');
	}
</style>
