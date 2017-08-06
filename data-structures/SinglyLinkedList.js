/*

 Singly linked list of node objects like:

 {
   data: [data],
   next: [reference to next node in list]
 }

*/

'use strict'

class SinglyLinkedList {
  constructor(...params) {
    this.head = null;
    params.forEach(item => {
      this.insert(item)
    })
  }

  insert(data) {
    if (this.head === null) { // empty list 
      this.head = {
        data,
        nextNode: null
      }
    }
    else { // insert last
      let current = this.head
      while (true) {
        if (current.nextNode === null) {
          current.nextNode = {
            data,
            nextNode: null
          }
          break
        }
        else {
          current = current.nextNode
        }
      }
    }
  }

  insertAt(data, index) {
    if(this.head === null && index === 0) return this.insert(data)

    let current = this.head, previous = this.head, counter = 0
    while (true) {
      if (current === null) break
      if (counter === index) {
        let newNode = {
          data,
          nextNode: current
        }
        if(counter === 0) {
          this.head = newNode
        }
        else {
          previous.nextNode = newNode
        }
        return
      }
      previous = current
      current = current.nextNode
      counter++
    }
    throw {
      name: 'Error',
      message: `Index ${index} out of bounds`
    }
  }

  deleteAt(index) {
    let current = this.head, previous = this.head, counter = 0
    while (true) {
      if (current === null) break
      if (counter === index) {
        if (counter === 0) {
          this.head = current.nextNode
        }
        else {
          previous.nextNode = current.nextNode
        }
        return current.data
      }
      previous = current
      current = current.nextNode
      counter++
    }
    throw {
      name: 'Error',
      message: `Index ${index} out of bounds`
    }
  }

  get(index) {
    let current = this.head, counter = 0
    while (true) {
      if (current === null) break
      if (counter === index) return current.data
      current = current.nextNode
      counter++
    }
    throw {
      name: 'Error',
      message: `Invalid index ${index}`
    }
  }

  get length() {
    let current = this.head, counter = 0
    while (true) {
      if (current === null) return counter
      current = current.nextNode
      counter++
    }
  }

  toString() {
    const results = []
    let current = this.head

    while (true) {
      if (current === null) break
      else results.push(current.data.toString())
      current = current.nextNode
    }
    return results.join(',')
  }
}

module.exports = SinglyLinkedList