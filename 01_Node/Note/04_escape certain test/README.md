## escape test using "skip"
```js
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
    it.skip('should return ten when 5 add to 5', function() {
      num = add(num , 5);
      num.should.equal(10);
    });
    it('should return twelve when 7 add to 5', function() {
      num = add(num , 7);
      num.should.equal(12);
    });
  });
});
```
```bash
Derejes-MBP:04_escape certain test derejekitaw$ mocha test
  number tests
    Add with out beforeEach
      - should return ten when 5 add to 5
      ✓ should return twelve when 7 add to 5
  1 passing (7ms)
  1 pending
```
## escape test using "x'
```js
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
```
```bash
Derejes-MBP:04_escape certain test derejekitaw$ mocha test
  number tests
    Add with out beforeEach
      - should return ten when 5 add to 5
      ✓ should return twelve when 7 add to 5
  1 passing (7ms)
  1 pending
```