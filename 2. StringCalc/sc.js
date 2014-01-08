function Add(numbers) {
	var result = 0;
	var delimiter = "\n";
	var exception = "";
	
	if (numbers.substring(0,2)=="//") {
		var locn = numbers.indexOf("\n");
		delimiter = numbers.substring(2,locn);
		numbers = numbers.substring(locn+1,numbers.length);
	}
		
	var nums = numbers
				.replace(delimiter,",")
				.split(",");
	for(var i=0, len=nums.length; i<len; i++) {
		if (nums[i].length>0) {
			var nInt = parseInt(nums[i],10);

			if (nInt<0) {
				if (exception.length>0) {
					exception += ",";
				}
				exception += nums[i];
			}

			if (nInt>=0 && nInt<=1000) {
				result += nInt;
			}
		}
	}
	
	if (exception.length>0) {
		throw "Negatives not allowed: " + exception;
	}
	
	return result;
}