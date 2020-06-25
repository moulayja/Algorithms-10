
/*
Creates a function that takes two integers, num and n, 
and returns an integer which is divisible by n and is the closest to num.
If there are two numbers equidistant from num and divisible by n, select the larger one.
*/

const roundNumber = (num, n) => {
	const low = Math.floor(num/n)*n;
	const high = low+n;
	return num-low < high-num? low : high;
};