var Test = require('assert')
Test.assertEquals = Test.equal

//load yout function
var myFunc = require('./index')

//COPY THE TEST BELOW

describe('Simple test', function () {
  it('simple', function () {
    Test.assertEquals(myFunc(), 'Hello world')
  })
})