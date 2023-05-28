class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            this.tail = this.head
        } else if (this.tail == null) {
            this.tail = newNode
            this.head.next = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop() {
        if (this.length === 0) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (this.length === 0) return undefined
        let head = this.head
        this.head = this.head.next
        this.length--
        return head
    }
    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            let newNext = this.head
            this.head = newNode
            this.head.next = newNext
        }
        this.length++
        return this.head
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let current = this.head
        for (let i = 1; i <= index; i++) {
            current = current.next
        }
        return current
    }
    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) !!this.push(val)
        if (index === 0) !!this.unshift(val)
        let newNode = new Node(val)
        let prev = this.get(index-1)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length-1) return this.pop()
        if (index === 0) return this.shift()
        let prev = this.get(index-1)
        let removedNode = prev.next
        prev.next = prev.next.next
        this.length--
        return removedNode
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()

list.push('Hello ')
list.push('World ')
list.push('or ')
list.push('Globe')

list.reverse()
console.log(list.head)