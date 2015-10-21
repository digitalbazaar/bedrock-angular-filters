var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('ellipsis', function($injector) {
  var ellipsisFilter = $injector.get('ellipsisFilter');

  it('should not replace text with ...', function() {
    ellipsisFilter('abcdefg', 10).should.equal('abcdefg');
  });

  it('should replace text with ...', function() {
    ellipsisFilter('abcdefg', 6).should.equal('abc...');
  });

  it('should show only ...', function() {
    ellipsisFilter('abcdefg', 1).should.equal('...');
  });
});
