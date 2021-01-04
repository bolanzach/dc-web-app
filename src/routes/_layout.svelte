<script>
	import Nav from '../components/MainNav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<div class="background">
	<div class="background-filter">
		<main>
			<slot></slot>
		</main>
	</div>
</div>


<style>
	.background {
		background-image: url("embers_background.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.background-filter {
		background-color: rgba(15, 11, 11, 0.644);
		width: 100%;
		height: 100%;
	}

	main {
		position: relative;
		max-width: 1500px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
