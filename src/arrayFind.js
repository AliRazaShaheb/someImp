console.clear();
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];

const isLargeNum = (el) => {
  return el > 5;
};

const myArr1 = myArr.push(7);

console.log(myArr1);

// const findSimilarNum = (el) => {
//   let c = []
//   let idx = myArr.findIndex(isLargeNum)
//   while (idx != -1){
//     c.push(idx)
//     idx = myArr.findIndex(isLargeNum, idx+1)
//   }
//   return el > 5
// }

// myArr.find((e) => {
//   if (e === parseInt("5")) {
//     return console.log("five mil gaya");
//   } else {
//     return console.log("your function is wrong");
//   }
//   return;
// });

// console.log(myArr.find(isLargeNum))

// console.log(findSimilarNum(myArr));
