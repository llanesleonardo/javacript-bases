import { sum } from './helpers'
import { suma, getTotal } from './index'

describe('Tests Cardio Day 1', () => {
  test('Test HOF suma', () => {
    expect(suma(1, 1)).toEqual(2)
  })
})

describe('Test reduce functions', () => {
  test('Test getTotal', () => {
    const list = [1, 2, 3] // = 6
    expect(getTotal(list, 1, suma)).toEqual(7)
  })

  function createProp(obj, val) {
    if (!obj[val]) obj[val] = 0
    obj[val]++
    return obj
  }
  function getNewObj(list, acc, reducerFun) {
    return list.reduce(reducerFun, acc)
  }

  test('Test HOF object propr ', () => {
    const obj = { car: 1 }
    expect(createProp(obj, obj.value)).toMatchObject({ car: 1 })
  })

  test('Test getTotal', () => {
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

    expect(getNewObj(data, {}, createProp)).toMatchObject({
      car: 5,
      truck: 3,
      bike: 2,
      walk: 2,
      van: 2
    })
  })
})
