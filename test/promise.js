var expect = require('chai').expect
var fetch = require('node-fetch')

describe('Promise测试', function () {
  it('异步请求返回对象', function () {
    return fetch('https://github.com')
      .then(res => {
        expect(res.size).to.be.an('number')
      })
  })
})
