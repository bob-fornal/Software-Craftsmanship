test( "Function Add(Empty)", function() {
  equal(Add(""),0, "Returned 0" );
});
test( "Function Add(String of Numbers)", function() {
  equal(Add("1"),1, "Add(\"1\") Returned 1" );
  equal(Add("1,2"),3, "Add(\"1,2\") Returned 3" );
});
test( "Function Add(Unknown number of Numbers)", function() {
  equal(Add("1,2,3"),6, "Add(\"1,2,3\") Returned 6" );
  equal(Add("1,2,3,4"),10, "Add(\"1,2,3,4\") Returned 10" );
});
test( "Function Add(With \\n in String)", function() {
  equal(Add("1\n2,3"),6, "Add(\"1\\n2,3\") Returned 6" );
  equal(Add("1,\n"),1, "Add(\"1,\\n\") Returned 1" );
});
test( "Function Add(With //d\n as Delimiter)", function() {
  equal(Add("//;\n1;2"),3, "Add(\"//;\\n1,2\") Returned 3" );
});
test( "Function Add(With Negative Numbers)", function() {
	var exc = "";
	try {
		Add("-1,2");
	} catch (err) {
		exc = err;
	}
	equal(exc, "Negatives not allowed: -1", 
		"Add(\"-1,2\") Returned \"" + exc + "\"" );

	exc = "";
	try {
		Add("2,-4,3,-5");
	} catch (err) {
		exc = err;
	}
	equal(exc, "Negatives not allowed: -4,-5", 
		"Add(\"2,-4,3,-5\") Returned \"" + exc + "\"" );
});
test( "Function Add(>1000)", function() {
  equal(Add("1000,2"),1002, "Add(\"1000,2\") Returned 1002" );
  equal(Add("1001,2"),2, "Add(\"1001,2\") Returned 2" );
});
test( "Function Add(Multi-Length Delimiters)", function() {
  equal(Add("//***\n1***2"),3, "Add(\"//***\\n1***2\") Returned 3" );
});
