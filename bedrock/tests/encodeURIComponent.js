var bedrock = GLOBAL.bedrock;

describe('encodeURIComponent', function() {
  beforeEach(function() {
    bedrock.waitForAngular();
  });

  it('should URI encode the string http://foo.bar?baz=fuzz', function() {
    expect(bedrock.run(function($injector) {
      var filter = $injector.get('encodeURIComponentFilter');
      return filter('http://foo.bar?baz=fuzz');
    })).to.eventually.equal('http%3A%2F%2Ffoo.bar%3Fbaz%3Dfuzz');
  });
});
