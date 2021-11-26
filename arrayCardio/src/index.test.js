import { sum } from './helpers'
import {
  inventors,
  patterBorn,
  patterCompleName,
  patternSortBirthDay,
  patterinventorsAge,
  patternYearsAllInventorsLived,
  patternSortinventorYearLived,
  patternMatchSubstring,
  patterlastNameAlphabeticSplit,
  patternGetLast,
  patternReduceAllInventors,
  patterInstanceEach,
  patterReduce
} from './index'

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
    expect(patterBorn(mockdata.year, 1800, 1955)).toBeTruthy()
  })

  // TODO: TEST WITH MORE THAN ONE OBJECT

  test('Give us an array of the inventors first and last names', () => {
    const mockdata = {
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
    }
    expect(patterCompleName(mockdata.first, mockdata.last)).toBe(
      'Albert Einstein'
    )
  })
  // TODO: TEST WITH MORE THAN ONE OBJECT

  test('Sort the inventors by bithdate, oldest to youngest', () => {
    const mockdata1 = {
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
    }

    const mockdata2 = {
      first: 'Nicolaus',
      last: 'Copernicus',
      year: 1473,
      passed: 1543
    }
    expect(patternSortBirthDay(mockdata1, mockdata2)).toBeTruthy()
  })
  // TODO: TEST WITH MORE THAN ONE OBJECT

  test('Inventors age', () => {
    const mockdata = {
      first: 'Nicolaus',
      last: 'Copernicus',
      year: 1473,
      passed: 1543
    }
    expect(patterinventorsAge(mockdata.year, mockdata.passed)).toBe(70)
  })

  // TODO INVENTORS AGE LIVED TOTAL

  test('patternYearsAllInventorsLived', () => {
    const mockdata = [1, 2, 3, 4, 5, 6]

    expect(
      patternReduceAllInventors(mockdata, 0, patternYearsAllInventorsLived)
    ).toBe(21)
  })

  test('Sort the inventors by years lived', () => {
    const mockdata1 = {
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955
    }

    const mockdata2 = {
      first: 'Nicolaus',
      last: 'Copernicus',
      year: 1473,
      passed: 1543
    }
    expect(patternSortinventorYearLived(mockdata1, mockdata2)).toBeTruthy()
  })

  test(' create a list of name that contain ra anywhere in the name', () => {
    const mockdata1 = ['Bernhard, Sandra']

    expect(patternMatchSubstring(mockdata1)).toBeTruthy()
  })

  test(' Split complete name only Last name taken', () => {
    const mockdata1 = 'Bernhard, Sandra'

    expect(patterlastNameAlphabeticSplit(mockdata1)[0]).toBe('Bernhard')
  })

  test('Get last name in a sort Array', () => {
    const mockdata = [
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
    const newArrayLastName = patterlastNameAlphabeticSplit(mockdata)
    expect(patternGetLast(newArrayLastName)).toBe('Beck')
  })

  test('Test HOF object propoerty', () => {
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

    const objExpected = { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }

    expect(patterInstanceEach(data, {}, patterReduce)).toBe(objExpected)
  })
})
