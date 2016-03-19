/*

 Singly linked list of node objects like:

 {
   data: 'data',
   next: nextNode
 }

*/

'use strict';
class SinglyLinkedList {
  constructor() {
    this.head = null;
    [].slice.call(arguments).forEach(item => {
      this.insert(item);
    });
  }

  insert(data, index) {
    // empty list
    if (this.head === null) {
      this.head = {
        data,
        nextNode: null
      };
    }
    // insert last
    else if (index === undefined) {
      let current = this.head;
      while (true) {
        if (current.nextNode === null) {
          current.nextNode = {
            data,
            nextNode: null
          };
          break;
        }
        else {
          current = current.nextNode;
        }
      }
    }
  }

  delete(index) {

  }

  get(index) {

  }

  toString() {
    let current = this.head, results = [];

    while (true) {
      if(current !== null) {
        results.push(current.data.toString());
      }
      else {
        break;
      }
      if (current.nextNode === null) {
        break;
      }
      else {
        current = current.nextNode;
      }
    }
    return results.join(',');
  }
}

module.exports = SinglyLinkedList;