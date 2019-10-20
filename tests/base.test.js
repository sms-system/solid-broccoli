const findIndex = require('../index')

test('basic', () => {
  expect(findIndex([0,2,4,6,8,10,12,14,16,18,20,22,24], 16)).toEqual(8)
  expect(findIndex([0,2,4,6,8,10,12,14,16,18,20,22,24], 17)).toEqual(-1)
})