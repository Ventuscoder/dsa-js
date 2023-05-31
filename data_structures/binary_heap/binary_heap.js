class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val)
        this.bubbleUp()
        return
    }
    bubbleUp() {
        let childIndex = this.values.length-1
        let parentIndex = Math.floor((childIndex-1)/2)
        while (parentIndex > 0 && this.values[parentIndex] < this.values[childIndex]) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]]
            childIndex = parentIndex
            parentIndex = Math.floor((childIndex-1)/2)
        }
    }
    extractMax() {
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
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

const maxBH = new MaxBinaryHeap()
maxBH.insert(41)
maxBH.insert(39)
maxBH.insert(33)
maxBH.insert(18)
maxBH.insert(27)
maxBH.insert(12)
maxBH.insert(55)
console.log(maxBH.extractMax())
console.log(maxBH.values)