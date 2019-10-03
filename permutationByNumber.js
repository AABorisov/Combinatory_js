/*
 * permutationByNumber
 * size - number of items
 * rank - a number of permutation
 * size 3:
 * [ 1, 2, 3 ] rank 1
 * [ 1, 3, 2 ] rank 2
 * [ 2, 1, 3 ] rank 3
 */
function permutationByNumber ( size, rank ) {
    let list = new Array(size).fill(0)
    let f = [1]
    for ( let i = 1; i < size + 1; i++ ) f[i] = f[i - 1] * ( i )

    rank = rank - 1 // zero permutation
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


console.log(permutationByNumber(5, 1))
console.log(permutationByNumber(5, 2))
console.log(permutationByNumber(5, 3))
console.log(permutationByNumber(5, 4))
console.log(permutationByNumber(5, 5))
console.log(permutationByNumber(5, 6))

function stringPermutationByNumber ( str, rank ) {
    return permutationByNumber(str.length, rank).map(index => str[ index - 1 ]).join("")
}
console.log(stringPermutationByNumber("abcde", 6))

// for 2 and 3
function factoradic ( size, number ) {
    let d = new Array(size).fill(0)
    for (let i = 1; number > 0; i++) {
        d[size - i] = number % i
        number = ( number - d[size - i] ) / i
    }
    return d
}

function permutationByNumber2 ( size, rank ) {
    // range 1...size
    let list = new Array(size).fill().map( (val, index) => index + 1)
    rank = rank - 1
    const d = factoradic( size, rank )
    return d.reduce( (acc, val) => {
        return acc.concat(list.splice(val, 1))
    }, [])
}

console.log(permutationByNumber2( 5, 6))
console.log(permutationByNumber2( 4, 21))

function permutationByNumber3 ( listOrString, rank ) {
    if ( typeof listOrString === "string" ) {
        return permutationByNumber3(listOrString.split(""), rank).join("")
    }
    if ( Array.isArray( listOrString ) ) {
        listOrString = [...listOrString]
    }
    const size = listOrString.length
    rank = rank - 1
    const d = factoradic( size, rank )
    return d.reduce( (acc, val) => acc.concat( listOrString.splice( val, 1 ) ), [])
}

console.log(permutationByNumber3( "abcde", 6))
const arr = [1, 2]
console.log(arr, permutationByNumber3(arr, 2), arr)