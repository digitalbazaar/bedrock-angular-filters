/* jshint -W030 */

var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('isEmpty', function($injector) {
  var isEmptyFilter = $injector.get('isEmptyFilter');

  it('should check empty array...', function() {
    isEmptyFilter([]).should.be.true;
  });

  it('should check non empty array...', function() {
    isEmptyFilter([0]).should.be.false;
  });

  it('should check empty object...', function() {
    isEmptyFilter({}).should.be.true;
  });

  it('should check non empty object...', function() {
    isEmptyFilter({key: 'value'}).should.be.false;
  });

  it('should check empty string...', function() {
    isEmptyFilter('').should.be.true;
  });

  it('should check non empty string...', function() {
    isEmptyFilter('0').should.be.false;
  });

  /* FIXME
  it('should throw on unsupported types...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')(false);
    })).to.eventually.throw(Error);
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')(true);
    })).to.eventually.throw(Error);
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')(undefined);
    })).to.eventually.throw(Error);
  });
  */
});
