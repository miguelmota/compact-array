# compact-array

Returns an array with *non-empty* values only.

# Install

```bash
npm install compact-array
```

```bash
bower install compact-array
```

# Usage

```javascript
var compact = require('compact-array');

var array = [
  'b',
  null,
  false,
  1,
  0,
  '',
  ['lolz', null, ['a',4,null], undefined]
];

console.log(compact(array));
// [
    'b',
    false,
    1,
    0,
    ['lolz',['a',4]
  ]

console.log(compact('non array')); // []
```

# License

MIT
