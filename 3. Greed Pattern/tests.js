test("Five Random Rolls", function() {
	var rolls = RollDice(5);
  equal(rolls.length, 5, "There are 5 values" );
  for(var i=0,len=rolls.length; i<len; i++) {
	ok(rolls[i]>0, "Roll " + (i+1) + " > 0");
	ok(rolls[i]<=6, "Roll " + (i+1) + " <= 6");
  }
});

test("Scoring Ones", function() {
	equal(Scoring([1,2,3,4,6]),100,
		"Single 1 = 100");
	equal(Scoring([1,1,3,4,6]),200,
		"Two 1 = 200");
	equal(Scoring([1,1,1,4,6]),1000,
		"Triple 1 = 1000");
	equal(Scoring([1,1,1,1,6]),2000,
		"Quad 1 = 2000");
	equal(Scoring([1,1,1,1,1]),4000,
		"Five 1 = 4000");
	equal(Scoring([1,1,1,1,1,1]),8000,
		"Six 1 = 8000");
});

test("Scoring Twos", function() {
	equal(Scoring([2,3,4,6,6]),0,
		"Single 2 = 0");
	equal(Scoring([2,2,3,6,6]),0,
		"Two 2 = 0");
	equal(Scoring([2,2,2,6,6]),200,
		"Triple 2 = 200");
	equal(Scoring([2,2,2,2,6]),400,
		"Quad 2 = 400");
	equal(Scoring([2,2,2,2,2]),800,
		"Five 2 = 800");
	equal(Scoring([2,2,2,2,2,2]),1600,
		"Six 2 = 1600");
});

test("Scoring Three", function() {
	equal(Scoring([2,3,4,6,6]),0,
		"Single 3 = 0");
	equal(Scoring([3,3,3,6,6]),300,
		"Triple 3 = 300");
});

test("Scoring Four", function() {
	equal(Scoring([2,3,4,6,6]),0,
		"Single 4 = 0");
	equal(Scoring([4,4,4,6,6]),400,
		"Triple 4 = 400");
});

test("Scoring Fives", function() {
	equal(Scoring([5,2,3,4,6]),50,
		"Single 5 = 50");
	equal(Scoring([5,5,3,4,6]),100,
		"Two 5 = 100");
	equal(Scoring([5,5,5,4,6]),500,
		"Triple 5 = 500");
	equal(Scoring([5,5,5,5,6]),1000,
		"Quad 5 = 1000");
	equal(Scoring([5,5,5,5,5]),2000,
		"Five 5 = 2000");
	equal(Scoring([5,5,5,5,5,5]),4000,
		"Six 5 = 4000");
});

test("Scoring Six", function() {
	equal(Scoring([2,3,4,4,6]),0,
		"Single 6 = 0");
	equal(Scoring([6,6,6,3,4]),600,
		"Triple 6 = 600");
});

test("Scoring Three Pair", function() {
	equal(Scoring([1,1,2,2,3,3]),800,
		"Three Pair = 800");
});

test("Scoring Straight", function() {
	equal(Scoring([1,2,3,4,5,6]),1200,
		"Straight = 1200");
});
