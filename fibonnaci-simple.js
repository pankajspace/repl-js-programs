// print fibonnaci series upto given max limit
// 0 1 1 2 3 5 8 13 21 34 55
const printFibonnaci = (maxLimit) => {
  let firstNum = 0;
  let secondNum = 1;
  console.log(firstNum);
  while (secondNum <= maxLimit){
    console.log(secondNum);
    let tempNum = firstNum;
    firstNum = secondNum;
    secondNum = tempNum + secondNum;
  }
};
// printFibonnaci(55);

// return fibonnaci number at specified position
const getFibNumAtPos = (pos) => {
  let i = 0;
  let firstNum = 0;
  let secondNum = 1;
  while (i < pos){
    let tempNum = firstNum;
    firstNum = secondNum;
    secondNum = tempNum + secondNum;
    i++;
  }
  console.log(firstNum)
};
// getFibNumAtPos(8);

// fibonnaci at position using recursion
const getFibAtPos = (position) => position < 2 ? position : getFibAtPos(position - 1) + getFibAtPos(position - 2);
getFibAtPos(6);