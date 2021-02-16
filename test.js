const assert = require('assert').strict;
const thisModule = require('.');

assert.strictEqual(thisModule.fun1() === thisModule.fun2(), true, new TypeError('Returned values are not identical'));