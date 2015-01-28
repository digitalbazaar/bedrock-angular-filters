var bedrock = GLOBAL.bedrock;

describe('embeddedString', function() {
  beforeEach(function() {
    bedrock.waitForAngular();
  });

  it('should escape a string with carriage returns and line feeds', function() {
    expect(bedrock.run(function($injector) {
      var filter = $injector.get('embeddedStringFilter');
      return filter('\r\n');
    })).to.eventually.equal('\\r\\n');
  });
});
