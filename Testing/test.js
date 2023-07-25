/*
  ----------------------------
  Automated testing with Mocha
  ----------------------------

  Automated testing is widely used in real projects. 
  
  ---------------------
  Why do we need tests? 
  ---------------------

  If we check a function, it does something wrong, we fix it, then we
  run it again, and so untill it works. But such re-runs aren't perfect,
  because we can omit something. So there's a certain probability of 
  fixing one thing and break another. 

  Automated testing means that test are written separately, in addition
  to our code. They run the functions in various ways, and compare 
  the results with the expected ones. 

  Behaviour Driven Development is a testing technique. Tests AND
  documentation AND examples. 

  Let say we want to create a function, we know what it should do and 
  we can describe it. Such description is called specification or specs. 
  It contains description of use cases together with tests for them(*)
  
  A spec has 3 main building blocks: 
  describe('title', function() {}) - what functionality we are 
    describing? It is used to group 'workers'(the it blocks); 
  it('use case description', function() {...}) - in use case 
  description, we are describing in human readable language 
  the particular use case, and in the second arg, we are testing it. 

  If the implementation is correct, it should execute without errors. 

  assert.equal() will check if the function result is correct, there 
  are many other types of comparisons like assert. 

  --------------------
  The development flow 
  --------------------
  
  1. For the start we're writing specs with the most basic functionality.
  2. Then we're creating the implementation.
  3. Then we run the specs by using Mocha testing framework to check if
  everything works. We make corrections untill everything is working as
  is supposed to.
  4. At this moment we have a working initial implementation with tests.
  5. Then we add more use cases, probably not supported by the 
  implementations yet, and our tests start to fail. 
  6. Go to step 3, update the implementation untill our tests give no 
  errors. 
  7. Repeat steps 3-6, untill the functionality is ready. 

  So the development is iterative. We write spec, implement it, make
  sure tests pass, then write more tests, make sure they work, etc.
  And at the end we have both a working implementation and tests for it. 

  ------------------
  The spec in action
  ------------------

  Mocha - the core framework. It provides common testing functions like
  describe and it, and some main functions that runs tests.
  Chai - the library has many assertions for different cases.
  Sinon - a library to spy over functions, emulate built-in functions
  and more. 

  We can select two ways orginizing the test here: 
  Adding more asserts into an it block. The problem is that like in our
  example from (*), in the second assert, we receive an error, but we have
  actually another error in the next assertion, and we cannot see it, we
  just see the first error. This is not the case with the second approach.
  In the second (**), we're making two tests, and we can see all the errors. 
  And we can also get more information on erros with the second option, 
  we can describe test specifically, which is not the case with the first
  option.
  
  There is one rule to follow: One test - one thing. If there is a complex
  test that does more than one thing, it is better to split those testes in
  tests that are responsible for only one thing.

  In order to test a more complex function, we can generate it blocks by
  using loops. (***)


*/

//*
describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(2, 2), 4);
    assert.equal(pow(3, 4), 81);
  });
});

// **
describe("pow", function () {
  it("2 raised to power 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81);
  });

  it("2 raised to power 2 is 4", function () {
    assert.equal(pow(2, 2), 4);
  });
});

// ***
describe("toPower", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(toPower(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
