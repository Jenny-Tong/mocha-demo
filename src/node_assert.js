var assert = require('assert')

function add (a, b) {
  return a + b
}

var res = add(1, 1)
assert(res === 2, '预期1加1等于1')
assert.ok(res === 2, '预期1加1等于1')
assert.equal(res, 2, '预期1加1等于1')
assert.notEqual(res, 3, '预期1加1不等于3')
