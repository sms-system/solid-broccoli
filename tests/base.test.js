const findIndex = require('../index')

test('basic', () => {
  expect(findIndex([0,2,4,6,8,10,12,14,16,18,20,22,24], 16)).toEqual(8)
  expect(findIndex([0,2,4,6,8,10,12,14,16,18,20,22,24], 17)).toEqual(-1)
  expect(findIndex([1,2,3], 1)).toEqual(0)
  expect(findIndex([1,2,3], 2)).toEqual(1)
  expect(findIndex([1,2,3], 3)).toEqual(2)
  expect(findIndex([1,2,3], 4)).toEqual(-1)
})