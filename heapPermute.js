const str = "abcde"
let list = str.split("")

function heapPermute ( n ) {
    if ( n === 0 ) {
        console.log(list)
    } else {
        for ( let i = 0; i < n; i ++ ) {
            heapPermute(n - 1)
            if ( n % 2 === 1 ) {
                let temp = list[ n - 1 ]
                list[ n - 1 ] = list[ 0 ]
                list[ 0 ] = temp
            } else {
                let temp = list[ n - 1 ]
                list[ n - 1 ] = list[ i ]
                list[ i ] = temp
            }
        }
    }
}

heapPermute( list.length )

