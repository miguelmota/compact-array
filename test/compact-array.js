var test = require('tape');
var compact = require('../compact-array');

test('compact array', function (t) {
  t.plan(9);

  t.deepEqual(compact(), []);
  t.deepEqual(compact(null), []);
  t.deepEqual(compact(''), []);
  t.deepEqual(compact([]), []);
  t.deepEqual(compact(1), []);
  t.deepEqual(compact(false), []);
  t.deepEqual(compact(true), []);

  var array = [
    'b',
    null,
    false,
    1,
    0,
    '',
    ['lolz', null, ['a',4,null], undefined]
  ];

  t.deepEqual(compact(array), [
    'b',
    false,
    1,
    0,
    ['lolz',['a',4]]
  ]);

  t.deepEqual(array, [
    'b',
    null,
    false,
    1,
    0,
    '',
    ['lolz', null, ['a',4,null], undefined]
  ]);

});
