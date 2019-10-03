const size = 4
let list = new Array( size + 1 ).fill(0)
let f = []
function factorial( n ) {
    if ( n === 1 ) {
        return f[ n ] = 1
    }
    return f[ n ] = n * factorial( n - 1 )
}
factorial( size + 1 )
let rank = 20
for ( let j = 1; j < size ; j ++ ) {
    let d = ( rank % f[ j + 1 ] ) / f[ j ]
    console.log(j,  d, rank, d * f[ j ], f[ j + 1 ], f[ j ])
    rank = rank - d * f[ j ]
    list[ size - j ] = d + 1
    console.log(list)
    for ( let i = size - j + 1; i < size + 1; i ++ ) {
        console.log( list, i, size, list[i - 1], d )
        if (list[ i - 1 ] > d) {
            list[ i - 1 ] = list[ i - 1 ] + 1
        }
    }
}

console.log(4132)
console.log(list)