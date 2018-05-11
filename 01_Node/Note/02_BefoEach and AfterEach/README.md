## Create test.js
```js
'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

function add(num1, num2) {
  return num1 + num2;
}
describe('Add with out beforeEach', function() {
  var num = 5;
  it('should return ten when 5 add to 5', function() {
    num = add(num , 5);
    num.should.equal(10);
  });
});
```
## Run test
```bash
Derejes-MBP:02_BefoEach and AfterEach derejekitaw$ mocha test.js


  Add with out beforeEach
    ✓ should return when 5 add to 5


  1 passing (8ms)
```
## Add another test
```js
it('should return twelve when 7 add to 5', function() {
    num = add(num , 7);
    num.should.equal(12);
  });
```
## Run test
> Fail why?
```bash
Derejes-MBP:02_BefoEach and AfterEach derejekitaw$ mocha test.js
  Add with out beforeEach
    ✓ should return ten when 5 add to 5
    1) should return twelve when 7 add to 5
  1 passing (8ms)
  1 failing
  1) Add with out beforeEach should return twelve when 7 add to 5:
      AssertionError: expected 17 to equal 12
      + expected - actual
      -17
      +12
      at Context.<anonymous> (test.js:21:16)
```
## Fix error
```js
'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

function add(num1, num2) {
  return num1 + num2;
}
describe('Add with out beforeEach', function() {
  var num;
  beforeEach(function(){
    num = 5;
  });
  it('should return ten when 5 add to 5', function() {
    num = add(num , 5);
    num.should.equal(10);
  });
  it('should return twelve when 7 add to 5', function() {
    num = add(num , 7);
    num.should.equal(12);
  });
});
```
## return
```bash
Derejes-MBP:02_BefoEach and AfterEach derejekitaw$ mocha test.js
  Add with out beforeEach
    ✓ should return ten when 5 add to 5
    ✓ should return twelve when 7 add to 5
  2 passing (6ms)
```