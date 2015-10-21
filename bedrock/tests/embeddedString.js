var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('embeddedString', function($injector) {
  var embeddedStringFilter = $injector.get('embeddedStringFilter');

  it('should escape a string with carriage returns and line feeds', function() {
    embeddedStringFilter('\r\n').should.equal('\\r\\n');
  });
});
