const assert = require('assert')
const { uniqueCount, middleCharacterReplacer } = require('../app')

describe ('uniqueCount', () => {
  it('should return the number of unique characters', () => {
    assert.equal(uniqueCount('abcdee'), 5)
  })
})

describe ('middleCharacterReplacer', () => {
  it('should replace the middle characters with the number of unique characters', () => {
    assert.equal(middleCharacterReplacer('replacethemiddle'), 'eplacethemiddl')
  })
})
