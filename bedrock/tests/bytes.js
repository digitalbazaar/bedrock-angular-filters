var bedrock = GLOBAL.bedrock;

bedrock.testInBrowser('bytes', function($injector) {
  var bytesFilter = $injector.get('bytesFilter');

  it('should return "-" for NaN', function() {
    bytesFilter('text').should.equal('-');
  });

  it('should round to two digits of precision', function() {
    var size = 1024 + 512;
    bytesFilter(size, 2).should.equal('1.50 KiB');
  });

  it('should output 1 byte', function() {
    bytesFilter(1, 0).should.equal('1 byte');
  });

  it('should output bytes', function() {
    bytesFilter(2, 0).should.equal('2 bytes');
  });

  it('should output KibiBytes', function() {
    bytesFilter(Math.pow(1024, 1), 2).should.equal('1 KiB');
  });

  it('should output MebiBytes', function() {
    bytesFilter(Math.pow(1024, 2), 0).should.equal('1 MiB');
  });

  it('should output GibiBytes', function() {
    bytesFilter(Math.pow(1024, 3), 0).should.equal('1 GiB');
  });

  it('should output TebiBytes', function() {
    bytesFilter(Math.pow(1024, 4), 0).should.equal('1 TiB');
  });

  it('should output PebiBytes', function() {
    bytesFilter(Math.pow(1024, 5), 0).should.equal('1 PiB');
  });
});
