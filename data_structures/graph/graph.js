// Undirected, unweighted graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(v) {
        while(this.adjacencyList[v].length) {
            const adjacentV= this.adjacencyList[v].pop()
            this.removeEdge(v, adjacentV)
        }
        delete this.adjacencyList[v]
    }
    dfsRecursive(start) {
        const visited = {}
        const result = []
        const adjacencyList = this.adjacencyList
        function dfs(vertex){
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) dfs(neighbor)
            })
        }
        dfs(start)
        return result
    }
    dfsIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true
        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    bfs(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true
        while(queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

const g = new Graph()
g.addVertex('SF')
g.addVertex('LA')
g.addVertex('SAC')
g.addVertex('DAL')
g.addVertex('PHX')
g.addVertex('SEA')
g.addVertex('DEN')
g.addEdge('SF', 'SAC')
g.addEdge('LA', 'SAC')
g.addEdge('SF', 'LA')
g.addEdge('SAC', 'PHX')
g.addEdge('LA', 'PHX')
g.addEdge('LA', 'DAL')
g.addEdge('PHX', 'DAL')
g.addEdge('SF', 'SEA')
g.addEdge('PHX', 'DEN')
console.log('Depth First Search Recursive:\n', g.dfsRecursive('SF'))
console.log('Depth First Search Iterative:\n', g.dfsIterative('SF'))
console.log('Breadth First Search:\n', g.bfs('SF'))