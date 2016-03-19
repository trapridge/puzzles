describe('SinglyLinkedList', () => {
    'use strict';

    var LinkedList = require('./SinglyLinkedList');

    it('should create a list from given items and produce string', () => {
        let items = ['yy', 'kaa', 'koo'];
        let test = new LinkedList(...items);
        expect(test.toString()).toEqual(items.join(','));
    });
});