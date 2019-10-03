function numberByPermutation ( permutation ) {
    const n = permutation.length
    let f = [1]
    for (let i = 1; i < n; i ++ ) f[i] = f[i - 1] * i

    let d = permutation.map( ( iPerm, i ) => {
        let d = 0
        for (let j = i + 1; j < n; j++) {
            if ( iPerm > permutation[j] ) d++
        }
        return d
    })
    console.log(d)
    return d.reduce( ( acc, valD, index ) => acc + valD * f[n - 1 - index], 1)
}

const permutation = [3, 2, 1]
const permutations = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1]]
console.log( numberByPermutation( permutation ), permutations.map(numberByPermutation) )