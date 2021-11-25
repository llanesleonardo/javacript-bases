import { sum } from './helpers'
import { inventors, patterBorn, listOfBorn } from './index'

describe('My First Test', () => {
  test('Sum Function', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})

describe('arrayCardio', () => {
  test('Filter the list of inventors for those who were born in the 1500s', () => {
    const mockdata = {
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
    }
    expect(patterBorn(mockdata.year, 1800, 1955)).toEqual(true)
  })
})
