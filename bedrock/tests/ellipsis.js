var bedrock = GLOBAL.bedrock;

describe('ellipsis', function() {
  beforeEach(function() {
    bedrock.waitForAngular();
  });

  it('should not replace text with ...', function() {
    expect(bedrock.run(function($injector) {
      var filter = $injector.get('ellipsisFilter');
      return filter('abcdefg', 10);
    })).to.eventually.equal('abcdefg');
  });

  it('should replace text with ...', function() {
    expect(bedrock.run(function($injector) {
      var filter = $injector.get('ellipsisFilter');
      return filter('abcdefg', 6);
    })).to.eventually.equal('abc...');
  });

  it('should show only ...', function() {
    expect(bedrock.run(function($injector) {
      var filter = $injector.get('ellipsisFilter');
      return filter('abcdefg', 1);
    })).to.eventually.equal('...');
  });
});
