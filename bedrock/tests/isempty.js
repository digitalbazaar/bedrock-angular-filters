var bedrock = GLOBAL.bedrock;

describe('isEmpty', function() {
  beforeEach(function() {
    bedrock.waitForAngular();
  });

  it('should check empty array...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')([]);
    })).to.eventually.be.true;
  });

  it('should check non empty array...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')([0]);
    })).to.eventually.be.false;
  });

  it('should check empty object...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')({});
    })).to.eventually.be.true;
  });

  it('should check non empty object...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')({key: 'value'});
    })).to.eventually.be.false;
  });

  it('should check empty string...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')('');
    })).to.eventually.be.true;
  });

  it('should check non empty string...', function() {
    expect(bedrock.run(function($injector) {
      return $injector.get('isEmptyFilter')('0');
    })).to.eventually.be.false;
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
