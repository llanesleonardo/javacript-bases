import { mock } from './mockShop'

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

//* usar mock shop
const { products } = mock
// 1) encontrar todos los productos de categoria "Mens Footwear" y asignar a un nuevo array
const mensFootwear = products.filter(product => product.category === 'Mens Footwear')
console.table(mensFootwear)

// 2) aplicar un 20% de descuento a todos los productos
const patter = procent => price => {
  const discount = (procent / 100) * price
  return price - discount
}

const newPrices = products.map(p => patter(25)(p.price))
console.table(newPrices)

// 3) sumar el total de ventas de todos los productos
const seccondPattern = (acumulador, stock, price) => stock * price + acumulador

const ventas = products.reduce((a, { stock, price }) => seccondPattern(a, stock, price), 0)

console.log({ ventas })
