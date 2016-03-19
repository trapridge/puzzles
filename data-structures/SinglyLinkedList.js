/*

 Singly linked list of node objects like:

 {
   data: [data],
   next: [reference to next node in list]
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
    else {
      throw {
        name: 'Error',
        message: 'Unimplemented'
      }
    }
  }

  delete(index) {

  }

  get(index) {
    let current = this.head, counter = 0;
    while (true) {
      if (current === null) break;
      if (counter === index) return current.data;
      current = current.nextNode;
      counter++;
    }
    throw {
      name: 'Error',
      message: `Invalid index ${index}`
    };
  }

  length() {
    let current = this.head, counter = 0;
    while (true) {
      if (current === null) return counter;
      current = current.nextNode;
      counter++;
    }
  }

  toString() {
    const results = [];
    let current = this.head;

    while (true) {
      if(current === null) break;
      else results.push(current.data.toString());
      current = current.nextNode;
    }
    return results.join(',');
  }
}

module.exports = SinglyLinkedList;