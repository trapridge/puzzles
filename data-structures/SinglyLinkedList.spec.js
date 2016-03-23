describe('ADS: SinglyLinkedList', () => {
  'use strict'

  const LinkedList = require('./SinglyLinkedList')
  const input = ['yy', 'kaa', 'koo']
  let list

  beforeEach(() => {
    list = new LinkedList(...input)
  })

  describe('toString()', () => {
    it('should serialize list', () => {
      expect(list.toString()).toEqual(input.join(','))
    })
  })

  describe('get(index)', () => {
    it('should get items by proper index', () => {
      expect(list.get(0)).toEqual(input[0])
      expect(list.get(1)).toEqual(input[1])
      expect(list.get(2)).toEqual(input[2])
    })

    it('should handle getting items by non-proper index', () => {
      expect(() => list.get(4)).toThrow()
      expect(() => list.get(-1)).toThrow()
      expect(() => list.get('foo')).toThrow()
    })
  })

  describe('length()', () => {
    it('should return correct length', () => {
      expect(list.length()).toEqual(3)

      list = new LinkedList()
      expect(list.length()).toEqual(0)

      list = new LinkedList('giraffe')
      expect(list.length()).toEqual(1)

      list = new LinkedList('1', 2, {}, [], new Error())
      expect(list.length()).toEqual(5)
    })
  })

  describe('insert()', () => {
    it('should add items to the end of the list', () => {
      list = new LinkedList()
      list.insert(4)
      expect(list.length()).toEqual(1)

      list = new LinkedList(1)
      list.insert(4)
      expect(list.length()).toEqual(2)

      list = new LinkedList(1)
      list.insert(4)
      expect(list.length()).toEqual(2)

      list = new LinkedList(1,2,3,4,5,6)
      list.insert(4) // extra params ignored
      expect(list.length()).toEqual(7)
    })

  })

  describe('insertAt()', () => {
    it('should add item to given proper index', () => {
      list.insertAt('jep', 0)
      expect(list.toString()).toEqual(['jep', 'yy', 'kaa', 'koo'].join(','))

      list = new LinkedList(...input)
      list.insertAt('jep', 1)
      expect(list.toString()).toEqual(['yy', 'jep', 'kaa', 'koo'].join(','))

      list = new LinkedList(...input)
      list.insertAt('jep', 2)
      expect(list.toString()).toEqual(['yy', 'kaa', 'jep', 'koo'].join(','))
    })

    it('should handle attempt to insert at non-proper index', () => {
      expect(() => list.insertAt('jep', 3)).toThrow()
    })
  })

  describe('deleteAt()', () => {
    it('should delete item at given proper index', () => {
      expect(list.deleteAt(0)).toEqual('yy')
      expect(list.toString()).toEqual(['kaa', 'koo'].join(','))

      list = new LinkedList(...input)
      expect(list.deleteAt(1)).toEqual('kaa')
      expect(list.toString()).toEqual(['yy', 'koo'].join(','))

      list = new LinkedList(...input)
      expect(list.deleteAt(2)).toEqual('koo')
      expect(list.toString()).toEqual(['yy', 'kaa'].join(','))
    })

    it('should handle attempt to delete at non-proper index', () => {
      expect(() => list.insertAt(3)).toThrow()
    })
  })

})