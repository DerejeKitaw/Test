'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('number tests', function(){
  function add(num1, num2) {
    return num1 + num2;
  }
  describe('Add with out beforeEach', function() {
    var num;
    beforeEach(function(){
      num = 5;
    });
    xit('should return ten when 5 add to 5', function() {
      num = add(num , 5);
      num.should.equal(10);
    });
    it('should return twelve when 7 add to 5', function() {
      num = add(num , 7);
      num.should.equal(12);
    });
  });
});