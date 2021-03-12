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
			pc1TotalEvents = data.picam1EventTotal
			pc2TotalEvents = data.picam2EventTotal
			totalEvents = data.totalEvents
			pc1LastMovingDate = data.picam1LM[2]
			pc1LastMovingTime = data.picam1LM[3]
			pc1LastStillDate = data.picam1LS[2]
			pc1LastStillTime = data.picam1LS[3]
			pc2LastMovingDate = data.picam2LM[2]
			pc2LastMovingTime = data.picam2LM[3]
			pc2LastStillDate = data.picam2LS[2]
			pc2LastStillTime = data.picam2LS[3]
		}).catch(err => console.log(err));
	})
	async function pingPiCam1() {
		await fetch(`http://192.168.0.26:8090/PingPiCam1`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			pc1status = data["pc1"]
		}).catch(err => console.log(err));
	}

	async function pingPiCam2() {
		await fetch(`http://192.168.0.26:8090/PingPiCam2`, {mode: "cors", method: "GET"})
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

<svg viewBox="0 -5 300 255" >
	<text x="0" y="18" font-size="2em" fill="black">SecCams</text>

	<line x1="50" y1="25" x2="260" y2="25" style="stroke:rgb(255,0,0);stroke-width:2" />

	<text x="0" y="47" font-size="1em" fill="black" >1 Last Motion</text>
	<text x="135" y="47" font-size="1em" fill="black" >{pc1LastMovingDate}</text>
	<text x="230" y="47" font-size="1em" fill="pink">{pc1LastMovingTime}</text>

	<text x="0" y="67" font-size="1em" fill="black">1 Last Still</text>
	<text x="135" y="67" font-size="1em" fill="black" >{pc1LastStillDate}</text>
	<text x="230" y="67" font-size="1em" fill="blue">{pc1LastStillTime}</text>

	<text x="0" y="87" font-size="1em" fill="black" on:click={handlepingPiCam1Click}>1 Ping status</text>
	<text x="135" y="87" font-size="1em" fill="blue">{pc1status}</text>

	<text x="0" y="107" font-size="1em" fill="black" >2 Last Motion</text>
	<text x="135" y="107" font-size="1em" fill="black" >{pc2LastMovingDate}</text>
	<text x="230" y="107" font-size="1em" fill="pink">{pc2LastMovingTime}</text>

	<text x="0" y="127" font-size="1em" fill="black">2 Last Still</text>
	<text x="135" y="127" font-size="1em" fill="black" >{pc2LastStillDate}</text>
	<text x="230" y="127" font-size="1em" fill="blue">{pc2LastStillTime}</text>

	<text x="0" y="147" font-size="1em" fill="black" on:click={handlepingPiCam2Click}>2 Ping Status</text>
	<text x="135" y="147" font-size="1em" fill="blue" >{pc2status}</text>

	<text x="0" y="167" font-size="1em" fill="black">Health Check</text>
	<text x="135" y="167" font-size="1em" fill="black" >{lhedate}</text>
	<text x="230" y="167" font-size="1em" fill="red">{lhetime}</text>

	<text x="0" y="187" font-size="1em" fill="black">PiCam1 Total</text>
	<text x="135" y="187" font-size="1em" fill="black" >{pc1TotalEvents}</text>
	<!-- <text x="230" y="167" font-size="1em" fill="red">{lhetime}</text> -->

	<text x="0" y="207" font-size="1em" fill="black">PiCam2 Total</text>
	<text x="135" y="207" font-size="1em" fill="black" >{pc2TotalEvents}</text>
	<!-- <text x="230" y="167" font-size="1em" fill="red">{lhetime}</text> -->

	<text x="0" y="227" font-size="1em" fill="black">Total Events</text>
	<text x="135" y="227" font-size="1em" fill="black" >{totalEvents}</text>
	<!-- <text x="230" y="167" font-size="1em" fill="red">{lhetime}</text> -->

	<text x="0" y="247" font-size="1em" fill="black">Pic Folder Size</text>
	<text x="135" y="247" font-size="1em" fill="red">{picdirsize}</text>



	Sorry, your browser does not support inline SVG.  
</svg>

<style>

</style>