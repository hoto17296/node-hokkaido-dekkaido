var hokkaido = require('.');
var assert = require('assert');

describe('北海道', function() {
  it('でっかいどー！！！', function() {
    assert.equal(hokkaido('北海道'), '\u001b[31mで\u001b[39m\u001b[33mっ\u001b[39m\u001b[32mか\u001b[39m\u001b[34mい\u001b[39m\u001b[35mど\u001b[39m\u001b[31mー\u001b[39m\u001b[33m！\u001b[39m\u001b[32m！\u001b[39m\u001b[34m！\u001b[39m');
  });
  it('でっかくないどう...', function() {
    assert.equal(hokkaido('東京都'), 'でっかくないどう...');
  });
});
