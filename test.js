var hokkaido = require('.');
var assert = require('assert');

describe('北海道', function() {
  it('でっかいどー！！！', function() {
    assert.equal(hokkaido('北海道'), 'でっかいどー！！！');
  });
  it('でっかくないどう...', function() {
    assert.equal(hokkaido('東京都'), 'でっかくないどう...');
  });
});
