function ogFib(n) {
    if (n <= 2) return 1
    return ogFib(n-1) + ogFib(n-2)
}

function memoFib(n, memo=[undefined, 1, 1]) {
    if (memo[n] !== undefined) return memo[n]
    let res = memoFib(n-1, memo) + memoFib(n-2, memo)
    memo[n] = res
    return res
}

function tabFib(n) {
    if (n <= 2) return 1
    const fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}

console.log(ogFib(45))
console.log(memoFib(45))
console.log(tabFib(45))