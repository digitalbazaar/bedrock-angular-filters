var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('prefill', function($injector) {
  var prefillFilter = $injector.get('prefillFilter');

  it('should convert 1 to 01', function() {
    prefillFilter('1').should.equal('01');
  });

  it('should convert 1 to a1', function() {
    prefillFilter('1', 2, 'a').should.equal('a1');
  });

  it('should convert 1 to 001', function() {
    prefillFilter('1', 3).should.equal('001');
  });
});
