class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    shift() {
        if (!this.head) return undefined
        const shiftedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            shiftedNode.next = null
        }
        this.length--
        return shiftedNode
    }
    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            this.head.next.prev = this.head
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let obtainedNode
        const backwardsIndex = (this.length - 1) - index
        if (backwardsIndex < index) {
            obtainedNode = this.tail
            for (let i = 1; i <= backwardsIndex; i++) {
                obtainedNode = obtainedNode.prev
            }
        } else {
            obtainedNode = this.head
            for (let i = 1; i <= index; i++) {
                obtainedNode = obtainedNode.next
            }
        }
        return obtainedNode
    }
    set(index, val) {
        const obtainedNode = this.get(index)
        if (!obtainedNode) return false
        obtainedNode.val = val
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
        const prevNode = this.get(index-1)
        const nextNode = prevNode.next
        const newNode = new Node(val)
        prevNode.next = newNode
        nextNode.prev = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const nodeToRemove = this.get(index)
        const prevNode = nodeToRemove.prev
        const nextNode = nodeToRemove.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.length--
        nodeToRemove.next = null
        nodeToRemove.prev = null
        return nodeToRemove
    }
}

const list = new DoublyLinkedList()
list.push(2)
list.push(3)
list.push(5)
list.remove(1)
console.log(list.get(1))