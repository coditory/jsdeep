# JSDeep - deep operations on json objects

[![Travis Build](https://img.shields.io/travis/coditory/jsdeep.svg?style=flat-square)](https://travis-ci.org/coditory/jsdeep)
[![Coverage](https://img.shields.io/coveralls/coditory/jsdeep.svg?style=flat-square)](https://coveralls.io/github/coditory/jsdeep)
[![NPM Version](https://img.shields.io/npm/v/@coditory/jsdeep.svg?style=flat-square)](http://npm.im/jsdeep)
[![NPM Downloads](https://img.shields.io/npm/dm/@coditory/jsdeep.svg?style=flat-square)](http://npm-stat.com/charts.html?package=jsdeep)

A library that contains basic operations on nested json structures.

[Demo page](https://jsbin.com/bumijigefo/edit?html,js,console)

## Features

- Provides operations to manipulate json structures.
- Uses a [umd](https://github.com/umdjs/umd) format so works everywhere.

## Operations

### Deep get

Get a nested property from an object.

- [tests](test/deepGet.spec.js)
- [implementation](lib/deepGet.js)

```js
import { deepGet } from 'jsdeep';

const obj = { x: { y: { z: 123 } } };
console.log(deepGet(obj, 'x.y.z'));
// Output: 123
console.log(deepGet(obj, ['x', 'y', 'z']));
// Output: 123
```

### Deep set

Set a nested property in an object.

- [tests](test/deepSet.spec.js)
- [implementation](lib/deepSet.js)

```js
import { deepSet } from 'jsdeep';

console.log(deepSet({}, 'x.y.z', 123));
// Output: { x: { y: { z: 123 } } }
console.log(deepSet({}, ['x', 'y', 'z'], 123));
// Output: { x: { y: { z: 123 } } }
console.log(deepSet({ a: 'a' }, 'x.y.z', 123));
// Output: { a: 'a', x: { y: { z: 123 } } }
```

### Deep exist

Deep check for a json property.

- [tests](test/deepExists.spec.js)
- [implementation](lib/deepExists.js)

```js
import { deepExists } from 'jsdeep';

const obj = { x: { y: { z: 123 } } };
console.log(deepExists(obj, 'x.y.z'));
// Output: true
console.log(deepExists(obj, ['x', 'y', 'z']));
// Output: true
console.log(deepExists(obj, 'x.y.y'));
// Output: false
```

### Deep equal

Deep comparison.

- [tests](test/deepEqual.spec.js)
- [implementation](lib/deepEqual.js)

```js
import { deepEqual } from 'jsdeep';

const a = { x: { y: { z: 123 } } };
const b = { x: { y: { z: 123 } } };
const c = { x: { y: { z: 1234 } } };
console.log(deepEqual(a, b));
// Output: true
console.log(deepEqual(a, c));
// Output: false
console.log(deepEqual(a, b, c));
// Output: false
```

### Deep copy

Copy object deeply.

- [tests](test/deepCopy.spec.js)
- [implementation](lib/deepCopy.js)

```js
import { deepCopy } from 'jsdeep';

const obj = { x: { y: { z: true } } };
const copy = deepCopy(obj);
console.log(copy);
// Output: { x: { y: { z: true } } }
console.log(obj.x !== copy.x);
// Output: true
```

### Deep merge

Deeply merge objects.

- [tests](test/deepMerge.spec.js)
- [implementation](lib/deepMerge.js)

```js
import { deepMerge } from 'jsdeep';

const obj1 = { x: 'x1', y: 'y1', z: 'z1' };
const obj2 = { x: 'x2', y: 'y2' };
const obj3 = { x: 'x3' };
const merged = deepMerge(obj1, obj2, obj3);
console.log(merged);
// Output: { x: 'x1', y: 'y2', z: 'z3' }
console.log(obj1);
// Output: { x: 'x1', y: 'y1', z: 'z1' }
```

### Deep freeze

Freeze object deeply.

- [tests](test/deepFreeze.spec.js)
- [implementation](lib/deepFreeze.js)

```js
import { deepFreeze } from 'jsdeep';

const obj = { x: { y: { z: true } } };
const frozen = deepFreeze(obj);
console.log(frozen);
// Output: { x: { y: { z: true } } }
frozen.x.y.z = false;
console.log(frozen);
// Output: { x: { y: { z: true } } }
```
