
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

function insertWhitespace(s) {
	return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}
