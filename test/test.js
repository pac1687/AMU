const assert = require('assert')
const { uniqueCount, middleCharacterReplacer, lineSplitter } = require('../app')

describe ('uniqueCount', () => {
  it('should return the number of unique characters', () => {
    assert.equal(uniqueCount('abcdee'), 5)
  })
})

describe ('middleCharacterReplacer', () => {
  it('should replace the middle characters with the number of unique characters', () => {
    assert.equal(middleCharacterReplacer('replacethemiddle'), 'r10e')
  })
})

describe ('lineSplitter', () => {
  it('should split the line on non-alphabetic characters', () => {
    assert.deepEqual(lineSplitter('This is my test-line'), ['This', ' ', 'is', ' ', 'my', ' ', 'test', '-', 'line'])
  })
})
