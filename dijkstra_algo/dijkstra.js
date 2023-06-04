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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight})
        this.adjacencyList[v2].push({node: v1, weight})
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []
        let smallest
        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest === finish) {
                // building path to return at end
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbor of this.adjacencyList[smallest]) {
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + neighbor.weight
                    let nextNeighbor = neighbor.node
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate
                        // updating previous - how we got to next neighbor
                        previous[nextNeighbor] = smallest
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

const g = new WeightedGraph()

g.addVertex('Mumbai')
g.addVertex('Delhi')
g.addVertex('Bengaluru')
g.addVertex('Kolkata')
g.addVertex('Hyderabad')
g.addVertex('Chennai')
g.addVertex('Lucknow')
g.addVertex('Pune')
g.addVertex('Udaipur')
g.addVertex('Amritsar')

// Change this to 1 or 3 to get different results
g.addEdge('Mumbai', 'Pune', 1)

g.addEdge('Mumbai', 'Bengaluru', 4)
g.addEdge('Mumbai', 'Amritsar', 9)
g.addEdge('Pune', 'Udaipur', 6)
g.addEdge('Pune', 'Hyderabad', 4)
g.addEdge('Bengaluru', 'Hyderabad', 5)
g.addEdge('Hyderabad', 'Chennai', 7)
g.addEdge('Hyderabad', 'Kolkata', 8)
g.addEdge('Kolkata', 'Lucknow', 4)
g.addEdge('Udaipur', 'Lucknow', 3)
g.addEdge('Udaipur', 'Delhi', 3)
g.addEdge('Delhi', 'Lucknow', 4)
g.addEdge('Amritsar', 'Delhi', 2)

console.log(g.Dijkstra('Lucknow', 'Chennai'))