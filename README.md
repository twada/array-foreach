array-foreach
================================

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]


Array#forEach ponyfill for older browsers

> Ponyfill: A polyfill that doesn't overwrite the native method


DESCRIPTION
---------------------------------------

Provides `forEach` function for older browsers, use native implememtation if exists.

It's just like

- [array-map](https://www.npmjs.org/package/array-map)
- [array-filter](https://www.npmjs.org/package/array-filter)
- [array-reduce](https://www.npmjs.org/package/array-reduce)
- [indexof](https://www.npmjs.org/package/indexof)
- [object-assign](https://www.npmjs.com/package/object-assign)


EXAMPLE
---------------------------------------

```javascript
var forEach = require('array-foreach');
var result = '';
forEach(['foo', 'bar', 'baz'], function (str, idx, ary) {
    result += str;
});
console.log(result); // 'foobarbaz'
```


INSTALL
---------------------------------------

### via npm

Install

    $ npm install --save array-foreach

Use

```javascript
var forEach = require('array-foreach');
```

### via bower

Install

    $ bower install --save array-foreach

Load (`forEach` function is exported)

    <script type="text/javascript" src="./path/to/bower_components/array-foreach/build/array-foreach.js"></script>

Use

```javascript
var result = '';
forEach(['foo', 'bar', 'baz'], function (str, idx, ary) {
    result += str;
});
```


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.


[travis-url]: http://travis-ci.org/twada/array-foreach
[travis-image]: https://secure.travis-ci.org/twada/array-foreach.svg?branch=master

[license-url]: http://twada.mit-license.org/
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
