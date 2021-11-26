// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// ! don't use a pattern
// (people)
// 1) is at least one person 19 or older ?

// 2) if is at least one person 19 or older, give me a new array with the
//    the people who are older than 19 and add the days they have lived
//    to today in the array of objects

// 3) is everyone 19 or older?

// 4) if is at least one person 19 or older, give me a new Object with the
//    the people who are older than 19 and the prop user concat the index, add the original props of the object and add the days they have lived
//    to today, the prop of is older: true or false, example :
//    {user1: { name: 'Wes', year: 1988 , daysAlive: 2312, isOlder: true }

// (comments)
// 4) find the comment with the ID of 823423 and give me the object of

// Find the comment with this ID

// delete the comment with the ID of 823423

export function suma(a, b) {
  return a + b
}

export function getTotal(list, acumulator, funReducer) {
  const result = list.reduce(funReducer, acumulator)
  return result
}
