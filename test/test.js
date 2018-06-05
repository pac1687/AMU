const assert = require('assert')
const { uniqueCount } = require('../app')

describe ('uniqueCount', () => {
  it('should return the number of unique characters', () => {
    assert.equal(uniqueCount('abcdee'), 5);
  })
})
