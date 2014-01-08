$(document).ready(function() {
	for(var i=1, len=100; i<=len; i++) {
		if (three(i) && five(i)) {
			num_output("FizzBuzz");
		} else if (three(i)) {
			num_output("Fizz");
		} else if (five(i)) {
			num_output("Buzz");
		} else {
			num_output(i);
		}
	}
});

function num_output(out) {
	$("#numbers").append(out + "<br/>");
}

function three(num) {
	return num_compare(num,3);
}
function five(num) {
	return num_compare(num,5);
}

function num_compare(num, comp) {
	return !(num%comp);
}
