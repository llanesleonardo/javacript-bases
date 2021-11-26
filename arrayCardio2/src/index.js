// ## Array Cardio Day 2

import {
  functionAtLeastThisYear,
  getDaysLived,
  functionUderThisYear,
  functionOlderThanThisYear,
  functionFindCommentId,
  functionFindCommentIdAndDelete
} from './helpers'

export const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

export const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// ! don't use a pattern
// (people)
// 1) is at least one person 19 or older ?
const atLeastThisYear = people.some(person =>
  functionAtLeastThisYear(person.year, 19)
)
console.table(atLeastThisYear)

// 2) if is at least one person 19 or older, give me a new array with the
//    the people who are older than 19 and add the days they have lived
//    to today in the array of objects
const newArrayAtLeastThisYear = people.filter(person =>
  functionAtLeastThisYear(person.year, 19)
)
console.table(newArrayAtLeastThisYear)

const newArrayDaysLived = newArrayAtLeastThisYear.map(person => {
  return { ...person, DaysLived: getDaysLived(person.year) }
})

console.table(newArrayDaysLived)

// 3) is everyone 19 or older?

const underThisYear = people.some(person =>
  functionUderThisYear(person.year, 19)
)
console.table(atLeastThisYear)

// 4) if is at least one person 19 or older, give me a new Object with the
//    the people who are older than 19 and the prop user concat the index, add the original props of the object and add the days they have lived
//    to today, the prop of is older: true or false, example :
//    {user1: { name: 'Wes', year: 1988 , daysAlive: 2312, isOlder: true }

const addPropertyIsOlder = newArrayAtLeastThisYear
  .filter(person => functionOlderThanThisYear(person.year, 19))
  .map(person => {
    return { ...person, isOlder: true }
  })
console.table(addPropertyIsOlder)

// (comments)
// 5) find the comment with the ID of 823423 and give me the object of

const findCommentIdAndSendObject = comments.filter(comment =>
  functionFindCommentId(comment.id, 823423)
)

console.table(findCommentIdAndSendObject[0])

// 6) Find the comment with this ID

// 7) delete the comment with the ID of 823423

const findCommentIdAndDelete = comments.filter(comment =>
  functionFindCommentIdAndDelete(comment.id, 823423)
)

console.table(findCommentIdAndDelete)
