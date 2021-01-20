<script>
	import { onMount } from 'svelte';

	let PList = []
	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/Pc1_last_fifty_pics`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data.plist)
			PList = data.plist
		}).catch(err => console.log(err));
	})

</script>

<svelte:head>
	<title>PiCam1</title>
</svelte:head>

<h1>PiCam1 Last 25</h1>

{#each PList as N}
	<img src={N} alt="fucked up"/>
{/each}

<style>
	img {
		width: 100%;
		margin: 0em .25em 0em .25em;
	}
</style>