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
}

const g = new Graph()
g.addVertex('SF')
g.addVertex('LA')
g.addVertex('SAC')
g.addVertex('DAL')
g.addVertex('PHX')
g.addEdge('SF', 'SAC')
g.addEdge('LA', 'SAC')
g.addEdge('SF', 'LA')
g.addEdge('SAC', 'PHX')
g.addEdge('LA', 'PHX')
g.addEdge('LA', 'DAL')
g.addEdge('PHX', 'DAL')
g.removeVertex('SAC')
console.log(g.adjacencyList)