module.exports = function parse(str) {
  'use strict'
  let offset = 0

  function parseSum() {
    let f1 = parseProduct()
    while(str[offset] === '+') {
      offset++
      let f2 = parseProduct()
      f1 += f2
    }
    return f1
  }

  function parseProduct() {
    let f1 = parseFactor()
    while(str[offset] === '*') {
      offset++
      let f2 = parseFactor()
      f1 *= f2
    }
    return f1
  }

  function parseFactor() {
    if(str[offset] >= '0' && str[offset] <= '9') {
      return str[offset++] - '0'
    }
    else if(str[offset] === '(') {
      offset++
      let sum = parseSum()
      offset++
      return sum
    }
    else {
      console.log(`non-digit found: ${str[offset]}`)
    }
  }

  return parseSum()
}