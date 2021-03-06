var init = require('../../initialize');
var assert = init.assert;
var glib = init.glib;

// test for Sugar Sub Class
describe('Sugar Sub Class', function() {

  var error = null;
  var result = null;

  it('Array.unique() が正しく設定されること', function() {
    error = (()=>glib.Array.hasOwnProperty('unique'));
    assert.throws(error, /hasOwnProperty/);
    glib.Sugar.GAS.extend({
      namespaces: [Array]
    });
    result = glib.Array.hasOwnProperty('unique');
    assert.equal(result, true);
  });

  it('Date.getWeekday() が正しく設定されること', function() {
    error = (()=>glib.Date.hasOwnProperty('getWeekday'));
    assert.throws(error, /hasOwnProperty/);
    glib.Sugar.GAS.extend({
      namespaces: [Date]
    });
    result = glib.Date.hasOwnProperty('getWeekday');
    assert.equal(result, true);
  });

  it('Function のテスト');

  it('Number.range() が正しく設定されること', function() {
    error = (()=>glib.Number.hasOwnProperty('range'));
    assert.throws(error, /hasOwnProperty/);
    glib.Sugar.GAS.extend({
      namespaces: [Number]
    });
    result = glib.Number.hasOwnProperty('range');
    assert.equal(result, true);
  });

  it('Object.toQueryString() が正しく設定されること', function() {
    error = (()=>glib.Object.hasOwnProperty('toQueryString'));
    assert.throws(error, /hasOwnProperty/);
    glib.Sugar.GAS.extend({
      namespaces: [Object]
    });
    result = glib.Object.hasOwnProperty('toQueryString');
    assert.equal(result, true);
  });

  it('Sugar.Range のテスト');
  it('Sugar.RegExp のテスト');

  it('String.underscore() が正しく設定されること', function() {
    error = (()=>glib.String.hasOwnProperty('underscore'));
    assert.throws(error, /hasOwnProperty/);
    glib.Sugar.GAS.extend({
      namespaces: [String]
    });
    result = glib.String.hasOwnProperty('underscore');
    assert.equal(result, true);
  });
});
