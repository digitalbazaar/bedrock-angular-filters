var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('ceil', function($injector) {
  var ceilFilter = $injector.get('ceilFilter');

  it('should convert 1.123 to 1.13', function() {
    ceilFilter(1.123, 2).should.equal('1.13');
  });

  it('should convert 0.991 to 1.00', function() {
    ceilFilter(0.991, 2).should.equal('1.00');
  });

  it('should convert 0.991 to 0.9910', function() {
    ceilFilter(0.991, 4).should.equal('0.9910');
  });
});
