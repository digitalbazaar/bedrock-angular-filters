var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('encodeURIComponent', function($injector) {
  var encodeURIComponentFilter = $injector.get('encodeURIComponentFilter');

  it('should URI encode the string http://foo.bar?baz=fuzz', function() {
    encodeURIComponentFilter('http://foo.bar?baz=fuzz')
      .should.equal('http%3A%2F%2Ffoo.bar%3Fbaz%3Dfuzz');
  });
});
