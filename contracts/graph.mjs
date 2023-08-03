let edges = [[3,10],[7,10],[0,4],[1,11],[5,12],[6,11],[1,7],[8,9],[5,6],[7,9],[4,12],[7,12],[0,5],[0,11],[6,13],[5,10],[0,11],[5,9],[11,12],[9,11],[0,3],[2,8],[2,3],[2,7],[2,5],[8,12]]
let vertices = 14

/**
 * @param {number[][]} edges 
 */
function graphEdges(edges, colors) {
    console.log("graph TB")
    for (let [a, b] of edges) {
        console.log(`  ${a}[${colors[a]}] --> ${b}[${colors[b]}]`)
    }
}

/**
 * @param {number[][]} edges 
 */
function main(edges) {
    // make every edge 0 -> 1
    // then flip until constraint satisfied
    const colors = fill(edges.length)
    console.log(colors)

    for (let i = 0; i < colors.length; i++) {
        color[i] = 1
    }


}

/**
 * @param {number[][]} edges 
 * @return {boolean}
 */
function check(edges, colors) {
    for (const [a, b] of edges) {
        if (colors[a] === colors[b]) {
            return false
        }
    }
    return true
}

/**
 * @param {number} vertices
 * @return {boolean[]}
 */
function fill(vertices) {
    let colors = []
    for (let i = 0; i < vertices; i++) {
        colors.push(0)
    }
    return colors
}

/**
 * @param {number[][]} edges 
 * @param {boolean[]} colors 
 */
function initialize(edges, colors) {
    for (const [a, b] of edges) {
        console.log(`  ${a}[${colors[a]}] --> ${b}[${colors[b]}]`)
        if (colors[a] === colors[b]) {
            colors[b] = 1
        }
    }
}

/**
 * @param {number[][]} edges 
 * @param {boolean[]} colors 
 */
function swap(edges, colors) {
    for (const [a, b] of edges) {
        console.log(`  ${a}[${colors[a]}] --> ${b}[${colors[b]}]`)
        if (colors[a] === colors[b]) {
            
        }
    }
}

/**
 * @param {number[][]} edges 
 */
function arr(edges) {
    // const colors = [0, 0, 0, 0]
    const colors = fill(vertices)

    for (let num = 0; num < Math.pow(2, vertices); num++) {
        const bin = num.toString(2)
        for (let i = 0; i < bin.length; i++) {
            colors[i] = Number(bin[i])
        }
        
        const res = check(edges, colors)
        if (res) {
            console.log(colors)
            console.log(res)
            break
        }
    }
}

arr(edges)
let ans = [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0]
console.log(check(edges, ans))
graphEdges(edges, ans)
