let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'c'];

function checkDuplicates(arr1, arr2){
  // const mapObj = {};
  // arr1.forEach(item => mapObj[item] = true);
  // return arr2.some(i => mapObj[item] == true);
  // return false;

  return arr1.some(item => arr2.includes(item));
}

checkDuplicates(arr1, arr2);