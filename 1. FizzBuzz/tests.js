test( "Function Test: three(num)", function() {
	equal(three(1), false, "three(1) == false" );
	equal(three(3), true, "three(3) == true" );
	equal(three(15), true, "three(15) == true" );
});

test( "Function Test: five(num)", function() {
	equal(five(1), false, "five(1) == false" );
	equal(five(5), true, "five(5) == true" );
	equal(five(15), true, "five(15) == true" );
});

test( "Function Test: num_compare(num, comp)", function() {
	equal(num_compare(3,1), true, "num_compare(3,1) == false");
});