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
}

const tree = new BinarySearchTree()
tree.insert(10).insert(7).insert(12).insert(13).insert(5)
console.log(tree.find(7))