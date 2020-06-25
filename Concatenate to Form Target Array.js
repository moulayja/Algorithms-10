/*
Create a function that returns true if smaller arrays can concatenate 
to form the target array and false otherwise.
*/

function canConcatenate(arr, target) {
    return [].concat(...arr).sort().join('') === target.sort().join('');
  }