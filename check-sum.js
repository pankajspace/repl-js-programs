// If sum of any two elements in array is given sum then return true otherwise return false

//when array is not sorted
function checkSum(numbers, sum) {
  const complimentNumbers = new Set();
  const len = numbers.length;
  const pair = {
    isSum: false
  }
  for (let i = 0; i < len; i++) {
    if (complimentNumbers.has(numbers[i])) {
      pair.isSum = true;
      pair.num1 = numbers[i];
      pair.num2 = sum - numbers[i];
      return pair;
    }
    complimentNumbers.add(sum - numbers[i]);
  }
  return pair;
}
const result1 = checkSum([6, 4, 3, 2, 1, 7], 9);
console.log('result1: ', result1);
