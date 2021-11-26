//* ## Array Cardio Day 1

//* Some data we can work with
export const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

//* 1. Filter the list of inventors for those who were born in the 1500's
export const patterBorn = (year, yearleft, yearRight) =>
  year >= yearleft && year <= yearRight

export const listOfBorn = inventors.filter(inventor =>
  patterBorn(inventor.year, 1500, 1600)
)

console.log(
  "TITULO: Filter the list of inventors for those who were born in the 1500's"
)
console.table(listOfBorn)

//* 2. Give us an array of the inventors' first and last names
export const patterCompleName = (firstName, lastName) =>
  firstName.concat(' ', lastName)
const compleNameInventor = inventors.map(inventor =>
  patterCompleName(inventor.first, inventor.last)
)
console.log("TITULO: Give us an array of the inventors' first and last names")
console.table(compleNameInventor)
//* 3. Sort the inventors by bithdate, oldest to youngest

export const patternSortBirthDay = (a, b) => {
  return b.year > a.year ? 1 : -1
}
const sortByBirthDay = inventors.sort((a, b) => patternSortBirthDay(a, b))

console.log('TITULO: Sort the inventors by bithdate, oldest to youngest')
console.table(sortByBirthDay)

//* 3.1 Inventors age
export const patterinventorsAge = (year, passed) => passed - year
export const inventorsAge = inventors.map(inventor =>
  patterinventorsAge(inventor.year, inventor.passed)
)
console.log('TITULO: Inventors age')
console.table(inventorsAge)

//* 4. How many years did all the inventors live?
export const patternYearsAllInventorsLived = (acc, cur) => acc + cur

const sumYearAllInventors = inventorsAge.reduce((acc, cur) =>
  patternYearsAllInventorsLived(acc, cur)
)

export const patternReduceAllInventors = (list, accumulator, funreduce) => {
  return list.reduce(funreduce, accumulator)
}

console.log('TITULO: How many years did all the inventors live?')
console.table(sumYearAllInventors)

//* 5. Sort the inventors by years lived

export const patternSortinventorYearLived = (a, b) => {
  const lastItem = a.passed - a.year
  const nextItem = b.passed - b.year
  return lastItem > nextItem ? 1 : -1
}

const inventorYearLived = inventors.sort((a, b) =>
  patternSortinventorYearLived(a, b)
)
console.log('TITULO: Sort the inventors by years lived')
console.table(inventorYearLived)

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
]
//* 6. create a list of name that contain 'ra' anywhere in the name

export const patternMatchSubstring = person => String(person).match('ra')

const listOfra = people.filter(person => patternMatchSubstring(person))
console.log(
  'TITULO: create a list of name that contain ra anywhere in the name'
)
console.table(listOfra)

//* 7. sort Exercise
//* Sort the people alphabetically by last name
export const patterlastNameAlphabeticSplit = person =>
  String(person).split(',', 1)

const lastNameSplit = people.map(person =>
  patterlastNameAlphabeticSplit(person)
)

const lastNameAlphabeticSort = lastNameSplit.sort()

export const patternGetLast = lastNameSplit => {
  const lastNameAlphabeticSorttoGetLast = lastNameSplit.sort()
  return lastNameAlphabeticSorttoGetLast[
    lastNameAlphabeticSorttoGetLast.length - 1
  ]
}
console.log(
  'TITULO: create a list of name that contain ra anywhere in the name'
)
console.table(lastNameAlphabeticSort)
//.reverse().join(' ')

//* 8. Reduce Exercise
//* Sum up the instances of each of these
//* example return  {apple: 3, oranges: 4}
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
]

const instanceEach = data.reduce((acc, cur) => {
  if (!acc.hasOwnProperty(cur)) acc[cur] = 0
  acc[cur]++
  return acc
}, {})

console.table(instanceEach)

const patterReduce = (acc, cur) => {
  if (!acc.hasOwnProperty(cur)) acc[cur] = 0
  acc[cur]++
  return acc
}

export const patterInstanceEach = (dataArray, accumulator, funreduce) => {
  return dataArray.reduce(funreduce, accumulator)
}
