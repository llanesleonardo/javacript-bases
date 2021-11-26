import {
  functionAtLeastThisYear,
  getDaysLived,
  functionUderThisYear,
  functionOlderThanThisYear,
  functionFindCommentId,
  functionFindCommentIdAndDelete
} from './helpers'
import { people, comments } from './index'

describe('Arreglos', () => {
  test('equalOrOlderThanThisYear', () => {
    expect(functionAtLeastThisYear(people[0].year, 19)).toBe(true)
  })

  test('getDaysLived', () => {
    expect(getDaysLived(2021, 0, 1)).toBe(329)
  })

  test('functionUderThisYear', () => {
    expect(functionUderThisYear(people[0].year, 19)).toBe(false)
  })

  test('functionOlderThanThisYear', () => {
    expect(functionOlderThanThisYear(people[0].year, 19)).toBe(true)
  })

  test('findCommentIdAndSendObject', () => {
    const obj = { text: 'Super good', id: 823423 }
    expect(functionFindCommentId(obj.id, 823423)).toBe(true)
  })

  test('functionFindCommentIdAndDelete', () => {
    const obj = { text: 'Super good', id: 823423 }
    expect(functionFindCommentIdAndDelete(obj.id, 823423)).toBe(false)
  })
})
