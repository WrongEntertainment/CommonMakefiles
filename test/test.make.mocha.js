var utils = require('./utils');


describe('test.make.mocha', function() {
  
  it('mocha-help', function(done) {
    utils.execute('make -f mocha.make mocha-help', function() {
      done();
    });
  });

  it('mocha-version', function(done) {
    utils.execute('make -f mocha.make mocha-version', function() {
      done();
    });
  });

});
