function Scoring(rolled) {
	var Score = 0;
	var counter = new Array();
	var multipliers = [1000,200,300,400,500,600];
	
	for(var i=0,len=6;i<len;i++) {
		counter[i] = 0;
	}
	for(var i=0,len=6;i<len; i++) {
		counter[rolled[i]-1]++;
	}

	for(var i=0,len=counter.length; i<len;i++) {
		// Handle Six-Of-A-Kind
		if (counter[i]>=6) {
			Score += (8 * multipliers[i]);
			counter[i] -= 6;
		}
		// Handle Five-Of-A-Kind
		if (counter[i]>=5) {
			Score += (4 * multipliers[i]);
			counter[i] -= 5;
		}
		// Handle Four-Of-A-Kind
		if (counter[i]>=4) {
			Score += (2 * multipliers[i]);
			counter[i] -= 4;
		}
		// Handle Triple
		if (counter[i]>=3) {
			Score += multipliers[i];
			counter[i] -= 3;
		}
	}
	
	// Calculate for # in position 1 & 5
	Score += counter[0]*100;
	Score += counter[4]*50;
	
	return Score;
}

function RollDice(number) {
	var rolls = new Array();

	for(var i=0, len=number; i<len; i++) {
		rolls[i] = Math.floor((Math.random()*6)+1);
	}
	
	return rolls;
}