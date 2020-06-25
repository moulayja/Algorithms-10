/*
Given a string, reverse all the words which have odd length.
The even length words are not changed.
*/

function reverseOdd(str) {
	return (
		str.split(" ")
			 .map(word => {
			 word = word.split("");
			 if (word.length % 2 !== 0) word = word.reverse();
			 word = word.join("");
			 return word;
			})
			.join(" ")
	)
}