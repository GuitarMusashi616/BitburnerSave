const arr = [3,2,3,5,3,4,3,4,1]

/**
 * @param {number[]} arr 
 * @param {number} pos 
 */
function allJumps(arr, pos, jumps) {
    // console.log(`allJumps(${pos}, ${jumps})`)
    if (pos === arr.length - 1) {
        return jumps+1
    }

    const jumpLength = arr[pos]
    let lowest = 1000000
    for (let i = pos+1; i <= pos + jumpLength; i++) {
        const res = allJumps(arr, i, jumps+1)
        if (res < lowest) {
            lowest = res
            console.log(`allJumps(${arr}, ${i}, ${jumps+1})`)
        }
    }
    return lowest
}

console.log(arr)
let res = allJumps(arr, 0, 0)
console.log(res)