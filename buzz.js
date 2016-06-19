
//Input Parameters allow for any numbers to be used and any length
function FizzBuzz(length, fizzNumber, buzzNumber){
	var output;
	for(var i=1;i<=length;i++){
		output = '';
		if(i%fizzNumber === 0){
			output+='Fizz';
		} 
		if(i%buzzNumber === 0){
			output+='Buzz';
		} 
		if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
			output+=i;
		}
		document.write(output);
		document.write("<br>");
	}
}