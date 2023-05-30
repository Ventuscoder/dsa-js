class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                } else {
                    return undefined
                }
            }
        }
    }
    find(val) {
        if (this.root === null) return false
        let current = this.root, found = false
        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return false
        return true
    }
    breadthFirstSearch() {
        const data = [], queue = []
        let node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
    dfsPreOrder(node = this.root) {
        let values = []
        values.push(node.val)
        if (node.left) {
            values = values.concat(this.dfsPreOrder(node.left))
        }
        if (node.right) {
            values = values.concat(this.dfsPreOrder(node.right))
        }
        return values
    }
    dfsPostOrder(node = this.root) {
        let values = []
        if (node.left) {
            values = values.concat(this.dfsPostOrder(node.left))
        }
        if (node.right) {
            values = values.concat(this.dfsPostOrder(node.right))
        }
        values.push(node.val)
        return values
    }
    dfsInOrder(node = this.root) {
        let values = []
        if (node.left) {
            values = values.concat(this.dfsInOrder(node.left))
        }
        values.push(node.val)
        if (node.right) {
            values = values.concat(this.dfsInOrder(node.right))
        }
        return values
    }
}

const tree = new BinarySearchTree()
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)
console.log('Pre Order: ', tree.dfsPreOrder())
console.log('Post Order: ', tree.dfsPostOrder())
console.log('In order: ', tree.dfsInOrder())