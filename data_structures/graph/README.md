## Time Complexity for Graphs

v = vertices

e = edges

| Operation  | Adjacency List  | Adjacency Matrix  |
| ------------ | ------------ | ------------ |
| Add vertex | O(1) | O(v^2)  |
| Add edge | O(1) | O(1)  |
| Remove vertex | O(v+e) | O(v^2)  |
| Remove edge | O(e) | O(1)  |
| Query | O(v+e) | O(1)  |
| Storage | O(v+e) | O(v^2)  |

Adjacency list:

1. Can take up less space (in sparse graphs)
2. Faster to iterate over all edges
3. Can be slower to look up specific edge

Adjacency graph:

1. Takes up more space (in sparse graphs)
2. Slower to iterate over all edges
3. Faster to look up specific edge