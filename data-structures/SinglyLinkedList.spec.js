describe('SinglyLinkedList', () => {
  'use strict';

  const LinkedList = require('./SinglyLinkedList');

  beforeEach(() => {
    //
  });

  describe('toString()', () => {
    it('should serialize list', () => {
      const input = ['yy', 'kaa', 'koo'];
      const list = new LinkedList(...input);

      expect(list.toString()).toEqual(input.join(','));
    });
  });

  describe('get(index)', () => {
    it('should get items by proper index', () => {
      const input = ['yy', 'kaa', 'koo'];
      const list = new LinkedList(...input);

      expect(list.get(0)).toEqual(input[0]);
      expect(list.get(1)).toEqual(input[1]);
      expect(list.get(2)).toEqual(input[2]);
    });

    it('should handle getting items by non-proper index', () => {
      const input = ['yy', 'kaa', 'koo'];
      const list = new LinkedList(...input);

      expect(() => list.get(4)).toThrow();
      expect(() => list.get(-1)).toThrow();
      expect(() => list.get('foo')).toThrow();
    });
  });

  describe('length()', () => {
    it('should return correct length', () => {
      const input = ['yy', 'kaa', 'koo'];
      let list = new LinkedList(...input);
      expect(list.length()).toEqual(3);

      list = new LinkedList();
      expect(list.length()).toEqual(0);

      list = new LinkedList('giraffe');
      expect(list.length()).toEqual(1);

      list = new LinkedList('1', 2, {}, [], new Error());
      expect(list.length()).toEqual(5);
    });
  });

  describe('insert()', () => {
    it('should add items to the end of the list', () => {
      let list = new LinkedList();
      list.insert(4);
      expect(list.length()).toEqual(1);

      list = new LinkedList(1);
      list.insert(4);
      expect(list.length()).toEqual(2);

      list = new LinkedList(1);
      list.insert(4);
      expect(list.length()).toEqual(2);

      list = new LinkedList(1,2,3,4,5,6);
      list.insert(4); // extra params ignored
      expect(list.length()).toEqual(7);
    });

    //it('should add items to the given index', () => {
    //  let list = new LinkedList();
    //
    //  expect(() => {
    //    list.insert(4, 2);
    //  }).toThrow();
    //
    //});
  });

  describe('delete()', () => {

  });


});