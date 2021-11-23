const numbers = [1, 5, 10, 15]
// * .map
const doubles = numbers.map(number => number * 2)
// console.table(doubles)

// * filter
const min10 = numbers.filter(number => number < 10)
// console.table(min10)

// * reduce
const sum = numbers.reduce((acc, cur, i, arr) => {
  return acc + cur
}, 0)

// dame el total de la lista miltiplicado por 2 que sean menor 20
const total = numbers
  .map(number => number * 2)
  .filter(number => number < 20)
  .reduce((acc, cur) => acc + cur, 0)

console.log({ total })

//* usar mock shop

// 1) encontrar todos los productos de categoria "Mens Footwear" y asignar a un nuevo array

// 2) aplicar un 20% de descuento a todos los productos

// 3) sumar el total de ventas de todos los productos
