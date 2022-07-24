var arrays = [
  ['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],
  ['taco', 'fish', 'apple', 'pizza'],
  ['banana', 'pizza', 'fish', 'apple']
];

var result = arrays.shift().filter(function(v) {
  return arrays.every(function(a) {
    return a.indexOf(v) !== -1;
  });
});

console.log(result);