import { add } from '../src/es6.js'
import { expect } from 'chai'

describe('es6加法函数测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2)
  })
  it('1 加 1 不应该等于 3', function () {
    expect(add(1,1)).to.be.not.equal(3)
  })
})
