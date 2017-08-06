/**
 * Binary search tree implementation
 */

class BST {
  constructor(comparator = (a, b) => a - b) {
    this.comparator = comparator
    this.root = null
  }

  insert(newData, root = this.root) {
    if (this.root === null) {
      this.root = {
        data: [newData],
        left: null,
        right: null
      }
      return this.root
    }
    else if (root === null) {
      root = {
        data: [newData],
        left: null,
        right: null
      }
    }
    else {
      const comparison = this.comparator(newData, root.data[0])
      if (comparison < 0) {
        root.left = this.insert(newData, root.left)
      }
      else if (comparison > 0) {
        root.right = this.insert(newData, root.right)
      }
      else {
        root.data.push(newData)
      }
    }
    return root
  }

  search() {}
  delete() {}

  print(keySelector = key => key, printer = console.log, root = this.root, 
      prefix = '', isTail = true) {
    if (root !== null) {
      if (root.right) {
        this.print(
          keySelector,
          printer, 
          root.right, 
          prefix + (isTail ? "│   " : "    "), 
          false  
        )
      }

      const data = keySelector(root.data[0]) + 
        (root.data.length > 1 ? `(${root.data.length})` : '')
      printer(`${prefix}${isTail ? "└── " : "┌── "}${data}`)

      if (root.left) {
        this.print(
          keySelector,
          printer, 
          root.left, 
          prefix + (isTail ? "    " : "│   "), 
          true
        )
      }
    }
  }
}

const bst = new BST((a, b) => a.key - b.key)
bst.insert({ key: 5, data: Math.random() })
bst.insert({ key: 3, data: Math.random() })
bst.insert({ key: 7, data: Math.random() })
bst.insert({ key: 6, data: Math.random() })
bst.insert({ key: 8, data: Math.random() })
bst.insert({ key: 4, data: Math.random() })
bst.insert({ key: 2, data: Math.random() })
bst.insert({ key: 2, data: Math.random() })
bst.insert({ key: 1, data: Math.random() })
bst.print(item => item.key)

