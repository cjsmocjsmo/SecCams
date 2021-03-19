<script>
	import { onMount } from 'svelte';
	let pc2LastMovingDate = ""
	let pc2LastMovingTime = ""
	let pc2LastStillDate = ""
	let pc2LastStillTime = ""
	let pc1LastMovingDate = ""
	let pc1LastMovingTime = ""
	let pc1LastStillDate = ""
	let pc1LastStillTime = ""
	let lhedate = ""
	let lhetime = ""
	let picdirsize = ""
	let pc1status = ""
	let pc2status = ""
	let lastgd = ""
	let lastgd1 = ""
	let lastgm = ""
	let lastgm1 = ""
	let lastpep = ""
	let lastpep1 = ""
	let pc1TotalEvents = ""
	let pc2TotalEvents = ""
	let totalEvents = ""

	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/stats`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			if (data.health === "None noted") {
				lhedate = "None noted"
			} else {
				lhedate = data.health
			}	
			picdirsize = data.picDirSize
			pc1TotalEvents = data.picam1AllToday
			pc2TotalEvents = data.picam2AllToday
			totalEvents = data.totalEvents
			pc1LastMovingDate = data.picam1LM["Date"]
			let ace = data.picam1LM["Time"].split(",")
			pc1LastMovingTime = ace[0]
			pc1LastStillDate = data.picam1LS["Date"]
			let kings = data.picam1LS["Time"].split(",")
			pc1LastStillTime = kings[0]
			pc2LastMovingDate = data.picam2LM["Date"]
			let queens = data.picam2LM["Time"].split(",")
			pc2LastMovingTime = queens[0]
			pc2LastStillDate = data.picam2LS["Date"]
			let jacks = data.picam2LS["Time"].split(",")
			pc2LastStillTime = jacks[0]
		}).catch(err => console.log(err));
	})
	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/last_gd`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			console.log(data.lastgd)
			if (data.lastgd.length === 0) {
				lastgd = "None"
				lastgd1 = "None"
			} else {
				lastgd = data.lastgd[0][0] + " ~ " + data.lastgd[0][1] + " ~ " + data.lastgd[0][2]
				lastgd1 = data.lastgd[1][0] + " ~ " + data.lastgd[1][1] + " ~ " + data.lastgd[1][2]
			}	
		}).catch(err => console.log(err));
	})
	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/last_gm`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			console.log(data.lastgm)
			if (data.lastgm.length === 0) {
				lastgm = "None"
			} else {
				lastgm = data.lastgm[0][0] + " ~ " + data.lastgm[0][1] + " ~ " + data.lastgm[0][2]
				lastgm1 = data.lastgm[1][0] + " ~ " + data.lastgm[1][1] + " ~ " + data.lastgm[1][2]
			}
		}).catch(err => console.log(err));
	})
	onMount(async () => {
		await fetch(`http://192.168.0.26:8090/last_pep`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			console.log(data.lastpep)
			if (data.lastpep.length === 0) {
				lastpep = "None"
			} else{
				lastpep = data.lastpep[0][0] + " ~ " + data.lastpep[0][1] + " ~ " + data.lastpep[0][2]
				lastpep1 = data.lastpep[1][0] + " ~ " + data.lastpep[1][1] + " ~ " + data.lastpep[1][2]
			}
		}).catch(err => console.log(err));
	})
	async function pingPiCam1() {
		await fetch(`http://192.168.0.26:8090/pingpc1`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			pc1status = data["pc1"]
		}).catch(err => console.log(err));
	}

	async function pingPiCam2() {
		await fetch(`http://192.168.0.26:8090/pingpc2`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			pc2status = data["pc2"]
		}).catch(err => console.log(err));

	}

	let handlepingPiCam1Click = () => {
		let promise = pingPiCam1().catch(err => console.log(err));
	}

	let handlepingPiCam2Click = () => {
		let promise = pingPiCam2().catch(err => console.log(err));
	}
</script>

<svelte:head>
	<title>SecCams</title>
</svelte:head>

<svg viewBox="0 -5 310 450" >
	<text x="0" y="18" font-size="2em" fill="black">SecCams</text>

	<line x1="50" y1="25" x2="260" y2="25" style="stroke:rgb(255,0,0);stroke-width:2" />

	<text x="0" y="47" font-size="1em" fill="black" >PC1 Motion</text>
	<text x="230" y="47" font-size="1em" fill="pink">{pc1LastMovingTime}</text>

	<text x="0" y="67" font-size="1em" fill="black">PC1 Still</text>
	<text x="230" y="67" font-size="1em" fill="blue">{pc1LastStillTime}</text>

	<text x="0" y="87" font-size="1em" fill="black" on:click={handlepingPiCam1Click}>PC1 Ping</text>
	<text x="230" y="87" font-size="1em" fill="blue">{pc1status}</text>

	<text x="0" y="107" font-size="1em" fill="black" >PC2 Motion</text>
	<text x="230" y="107" font-size="1em" fill="pink">{pc2LastMovingTime}</text>

	<text x="0" y="127" font-size="1em" fill="black">PC2 Still</text>
	<text x="230" y="127" font-size="1em" fill="blue">{pc2LastStillTime}</text>

	<text x="0" y="147" font-size="1em" fill="black" on:click={handlepingPiCam2Click}>PC2 Ping</text>
	<text x="230" y="147" font-size="1em" fill="blue" >{pc2status}</text>

	<text x="0" y="167" font-size="1em" fill="black">Health Check</text>
	<text x="230" y="167" font-size="1em" fill="black" >{lhedate}</text>

	<text x="0" y="187" font-size="1em" fill="black">PC1 Total</text>
	<text x="230" y="187" font-size="1em" fill="black" >{pc1TotalEvents}</text>

	<text x="0" y="207" font-size="1em" fill="black">PC2 Total</text>
	<text x="230" y="207" font-size="1em" fill="black" >{pc2TotalEvents}</text>

	<text x="0" y="227" font-size="1em" fill="black">Total Events</text>
	<text x="230" y="227" font-size="1em" fill="black" >{totalEvents}</text>

	<text x="0" y="247" font-size="1em" fill="black">Pic Folder Size</text>
	<text x="230" y="247" font-size="1em" fill="black">{picdirsize}</text>

	<text x="0" y="267" font-size="1em" fill="black">Garage Door Status</text>
	<text x="60" y="287" font-size="1em" fill="black">{lastgd}</text>
	<text x="50" y="307" font-size="1em" fill="black">{lastgd1}</text>

	<text x="0" y="327" font-size="1em" fill="black">Grandma Status</text>
	<text x="50" y="347" font-size="1em" fill="black">{lastgm}</text>
	<text x="50" y="367" font-size="1em" fill="black">{lastgm1}</text>

	<text x="0" y="387" font-size="1em" fill="black">People Status</text>
	<text x="71" y="407" font-size="1em" fill="black">{lastpep}</text>
	<text x="50" y="427" font-size="1em" fill="black">{lastpep1}</text>

	Sorry, your browser does not support inline SVG.  
</svg>

<style>

</style>