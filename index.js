'use strict';

module.exports = function forEach (ary, callback, thisArg) {
    if (ary.forEach) {
        ary.forEach(callback, thisArg);
        return;
    }
    if (typeof ary === 'undefined' || ary === null) {
        throw new TypeError();
    }
    if (typeof callback !== 'function') {
        throw new TypeError();
    }
    for (var i = 0; i < ary.length; i+=1) {
        callback.call(thisArg, ary[i], i, ary);
    }
};
