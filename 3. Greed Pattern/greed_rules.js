function init_ScoringRules() {
	var rules = new Array();
	
	var n = 0;
	
	rules[n++] = rule_Straight;
	rules[n++] = rule_threePair;
	
	rules[n++] = rule_sixRole;
	rules[n++] = rule_fiveRole;
	rules[n++] = rule_fourRole;
	rules[n++] = rule_threeRole;
	
	rules[n++] = rule_singleOne;
	rules[n++] = rule_singleFive;
	
	return rules;
}

function Scoring(rolled) {
	var rules = init_ScoringRules();
	var Score = 0;
	var counter = new Array();
	var multipliers = [1000,200,300,400,500,600];
	
	for(var i=0,len=6;i<len;i++) {
		counter[i] = 0;
	}
	for(var i=0,len=6;i<len; i++) {
		counter[rolled[i]-1]++;
	}

	for(var i=0, len=rules.length; i<len; i++) {
		Score += rules[i](counter, multipliers)
	}
	
	return Score;
}

function RollDice(number) {
	var rolls = new Array();

	for(var i=0, len=number; i<len; i++) {
		rolls[i] = Math.floor((Math.random()*6)+1);
	}
	
	return rolls;
}

function rule_singleOne(counter, mult) {
	var Score = 0;

	while (counter[0]>0) {
		counter[0]--;
		Score += 100;
	}
	return Score;
}

function rule_singleFive(counter, mult) {
	var Score = 0;

	while (counter[4]>0) {
		counter[4]--;
		Score += 50;
	}
	return Score;
}

function rule_threeRole(counter, mult) {
	var Score = 0;
	
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]>=3) {
			counter[i] -=3;
			Score += mult[i];
		}
	}
	
	return Score;
}

function rule_fourRole(counter, mult) {
	var Score = 0;
	
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]>=4) {
			counter[i] -=4;
			Score += 2 * mult[i];
		}
	}
	
	return Score;
}

function rule_fiveRole(counter, mult) {
	var Score = 0;
	
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]>=5) {
			counter[i] -=5;
			Score += 4 * mult[i];
		}
	}
	
	return Score;
}

function rule_sixRole(counter, mult) {
	var Score = 0;
	
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]>=6) {
			counter[i] -=6;
			Score += 8 * mult[i];
		}
	}
	
	return Score;
}

function rule_threePair(counter, mult) {
	var Score = 0;

	var cnt_pair = 0;
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]==2) {
			cnt_pair++;
		}
	}
	if (cnt_pair==3) {
		for(var i=0,len=counter.length; i<len; i++) {
			if (counter[i]==2) {
				counter[i] = 0;
			}
		}
		Score = 800;
	}
	
	return Score;
}

function rule_Straight(counter, mult) {
	var Score = 0;

	var cnt_straight = 0;
	for(var i=0,len=counter.length; i<len; i++) {
		if (counter[i]==1) {
			cnt_straight++;
		}
	}
	if (cnt_straight==6) {
		for(var i=0,len=counter.length; i<len; i++) {
			if (counter[i]==1) {
				counter[i] = 0;
			}
		}
		Score = 1200;
	}
	
	return Score;
}