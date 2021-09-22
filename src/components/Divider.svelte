<script>
	export let width = 1;
	export let color = 'black';
</script>

<div
	class="divider"
	style={`
    height: ${width}px;
    background-color: ${color};
`}
/>

<style scoped lang="scss">
	.divider {
		content: '';
		display: block;
		widows: 100%;
	}
</style>
