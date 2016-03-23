ddescribe('', () => {
  'use strict'

  const parse = require('./parseArithmeticStingRecDesc')

  it('', () => {
    expect(parse('2*3+4*5')).toEqual(26)
    expect(parse('2*3+4*5*2')).toEqual(46)
    expect(parse('2*(3+4)')).toEqual(14)
    expect(parse('(2*9)*(3+4)+7')).toEqual(133)
    expect(parse('((1+2)*(2+4))')).toEqual(18)
  })

})