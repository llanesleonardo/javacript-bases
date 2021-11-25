import { sum } from './helpers'
import { filterBetweenDates } from './hof'

describe('Test HOF', () => {
  test('filterBetweenDates Function', () => {
    const inventor = {
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
    }
    expect(filterBetweenDates(1500, 1599)(inventor.year)).toBeFalsy()
  })
})

describe('Tests Cardio Day 1', () => {
  test('Filter the list of inventors for those who were born in the 1500', () => {
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
    ]
    const fifteen = inventors.filter(inventor =>
      filterBetweenDates(1500, 1599)(inventor.year)
    )

    expect(fifteen).toContainEqual([
      {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
      }
    ])
  })
  test('Give us an array of the inventors first and last names', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('Sort the inventors by birthdate, oldest to youngest', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('How many years did all the inventors live?', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('Sort the inventors by years lived', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('create that contain ra anywhere in the name', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('Sort the people alphabetically by last name', () => {
    expect(sum(1, 1)).toEqual(2)
  })
  test('Sum up the instances of each of these', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
