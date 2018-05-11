## Tools
> [Mocha](https://mochajs.org/)
> [Chai](http://www.chaijs.com/)
> Sinon

## Install mocha and chai
```
npm install mocha chai
```

## create test.js file
```js
'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

function isEven(num) {
  return num % 2 === 0;
}
describe('unit tests', function() {
  it('should return true when number is even', function() {
    isEven(4).should.be.true;
  });
});
```
## Run test
```bash
Derejes-MBP:01 derejekitaw$ mocha test.js
  unit tests
    ✓ should return true when number is even
  1 passing (6ms)
```
## Add another test
```js
it('should return false when number is odd', function(){
  expect(isEven(5)).to.be.false;
} )
```
## Run test
```bash
Derejes-MBP:01 derejekitaw$ mocha test.js
  unit tests
    ✓ should return true when number is even
    ✓ should return false when number is odd
  2 passing (6ms)
  ```
