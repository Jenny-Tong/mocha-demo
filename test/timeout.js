var expect = require('chai').expect

describe('超时函数测试', function () {
  it('测试在 3000ms 后结束', function (done) {
    var x = true
    function next () {
      console.log('in next')
      x = false
      expect(x).to.be.not.ok
      done()
    }
    setTimeout(next, 3000)
  })
})