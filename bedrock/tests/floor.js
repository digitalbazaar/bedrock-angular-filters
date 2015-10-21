var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('floor', function($injector) {
  var floorFilter = $injector.get('floorFilter');

  it('should convert 1.128 to 1.12', function() {
    floorFilter(1.128, 2).should.equal('1.12');
  });

  it('should convert 0.991 to 0.991', function() {
    floorFilter(0.991, 3).should.equal('0.991');
  });

  it('should convert 0.991 to 0.9910', function() {
    floorFilter('0.991', 4).should.equal('0.9910');
  });
});
