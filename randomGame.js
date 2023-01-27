function randomGame() {
	let numPick;
	let numTimes = 0;
	let numTimer = setInterval(function(){
		numPick = Math.random();
		numTimes++
		if(numPick > .75) {
			clearInterval(numTimer);
			console.log("It took " + numTimes + " try/tries.");
		}
	},1000)
}
