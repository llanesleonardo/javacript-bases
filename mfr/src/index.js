const numbers = [1, 5, 10, 15]
// * .map
const doubles = numbers.map(number => number * 2)
// console.table(doubles)

// * filter
const min10 = numbers.filter(number => number < 10)
// console.table(min10)

// * reduce
const total = numbers.reduce((acc, cur, i, arr) => {
  return acc + cur
}, 0)

//console.log({ total })
