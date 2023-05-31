class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
        return
    }
    bubbleUp() {
        let childIndex = this.values.length-1
        if (childIndex === 0) return 0
        let parentIndex = Math.floor((childIndex-1)/2)
        while (parentIndex > 0 && this.values[parentIndex].priority > this.values[childIndex].priority) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]]
            childIndex = parentIndex
            parentIndex = Math.floor((childIndex-1)/2)
        }
    }
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }
    sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex
                }
            }
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue('common cold', 4)
ER.enqueue('drunk', 5)
ER.enqueue('fractured hand', 2)
ER.enqueue('gunshot wound', 1)
ER.enqueue('food poisoning', 3)
ER.enqueue('sports injury', 3)

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.values)