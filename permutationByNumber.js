function permutationByNumber ( size, rank ) {
    let list = new Array(size).fill(0)
    let f = [1]
    for ( let i = 1; i < size + 1; i++ ) f[i] = f[i - 1] * ( i )

    rank = rank - 1
    for ( let i = 0; i < size; i++) {
        let d = ( rank % f[i + 1] ) / f[i]
        rank = rank - d * f[ i ]
        list[(size - 1) - i] = d + 1
        for ( let j = size - i; j < size; j ++) {
            if ( list[ j ] > d ) list[ j ] ++
        }
    }
    return list
}

function stringPermutationByNumber ( str, rank ) {
    return permutationByNumber(str.length, rank).map(index => str[ index - 1 ]).join("")
}

console.log(permutationByNumber(5, 1))
console.log(permutationByNumber(5, 2))
console.log(permutationByNumber(5, 3))
console.log(permutationByNumber(5, 4))
console.log(permutationByNumber(5, 5))
console.log(permutationByNumber(5, 6))
console.log(stringPermutationByNumber("abcde", 6))
