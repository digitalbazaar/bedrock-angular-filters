var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('mask', function($injector) {
  var maskFilter = $injector.get('maskFilter');

  it('should convert 12345 to *2345', function() {
    maskFilter('12345').should.equal('*2345');
  });

  it('should convert 12345 to 2345', function() {
    maskFilter('12345', 4).should.equal('2345');
  });

  it('should convert 12345 to ****2345', function() {
    maskFilter('12345', 8).should.equal('****2345');
  });
});
