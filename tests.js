var Test = require('assert')

//TODO define every assert method fron codewars CW using node assert methods
Test.assertEquals = Test.equal
//...X methods left

//load yout function
var myFunc = require('./index')

//COPY THE TEST BELOW

describe('Simple test', function () {
  it('simple', function () {
    Test.assertEquals(myFunc(), 'Hello world')
  })
})