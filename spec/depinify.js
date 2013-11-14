require('chai').should();
describe('depinify', function() {
  describe('initialization', function() {
    // subject under test
    var Depinify;
    before(function() {
      // require the object
      Depinify = require('../src/depinify');
    })
    it('is a constructor function', function() {
      Depinify.should.be.a('Function');
    });
    it('has a function_parameters method', function() {
      var obj = new Depinify();
      obj.should.have.property('function_parameters');
      obj.function_parameters.should.be.a('Function');
    });
    describe('function_parameters', function() {
      var obj;
      before(function() {
        obj = new Depinify();
      });
      it('returns empty array for function without params', function() {
        var f = function() {};
        obj.function_parameters(f).should.be.empty;
      });
      it('returns array of parameter names', function() {
        var f = function(test, hest) {};
        obj.function_parameters(f).should.eql(['test', 'hest']);
      });
      it('returns works when the first line is suffixed with comments', function() {
        var f = function(test, hest) {}; // This is a comment
        obj.function_parameters(f).should.eql(['test', 'hest']);
      });
      it('returns works when the when there is no whitespace between params', function() {
        var f = function(test,hest) {
        };
        obj.function_parameters(f).should.eql(['test', 'hest']);
      });
      it('returns works when the when there is "too much" white space between params', function() {
        var f = function(     test   ,    hest     ) {
        };
        obj.function_parameters(f).should.eql(['test', 'hest']);
      });
    });
  });
});

