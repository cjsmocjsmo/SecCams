<script>
	import { onMount } from 'svelte';

	let PList = []
	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/pc2_last_fifty_pics`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data.plist)
			PList = data.plist
		}).catch(err => console.log(err));
	})

</script>

<svelte:head>
	<title>PiCam2</title>
</svelte:head>

<h1>PiCam2 Last 25</h1>

{#each PList as N}
	<img src={N} alt="fucked up"/>
{/each}

<style>
	img {
		width: 47%;
		margin: 0em .25em 0em .25em;
	}
</style>