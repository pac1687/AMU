const assert = require('assert')
const { uniqueCount, middleCharacterReplacer, lineSplitter, lineReplacer } = require('../app')

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

describe ('lineReplacer', () => {
  it('should replace words in a line with first character, number of uniques in the middle, and last character', () => {
    assert.equal(lineReplacer('This is my test-line'), 't2s is my t2t-l2e')
  })
})
