var init = require('../../initialize');
var assert = init.assert;
var glib = init.glib;

// test for Sugar Class
describe('Sugar Class', function() {

  it('Sugar.Array.unique() が存在すること', function() {
    assert.equal(glib.Sugar.Array.hasOwnProperty('unique'), true);
  });

  it('Sugar.Date.getWeekday() が存在すること', function() {
    assert.equal(glib.Sugar.Date.hasOwnProperty('getWeekday'), true);
  });

  it('Sugar.Function のテスト');

  it('Sugar.Number.range() が存在すること', function() {
    assert.equal(glib.Sugar.Number.hasOwnProperty('range'), true);
  });

  it('Sugar.Object.toQueryString() が存在すること', function() {
    assert.equal(glib.Sugar.Object.hasOwnProperty('toQueryString'), true);
  });

  it('Sugar.Range のテスト');
  it('Sugar.RegExp のテスト');

  it('Sugar.String.underscore() が存在すること', function() {
    assert.equal(glib.Sugar.String.hasOwnProperty('underscore'), true);
  });
});
