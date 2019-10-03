// abc
// abc, acb, bac, bca, cab, cba

{
    const str = "abcd" //...

    const strArr = str.split("")

    let mapFunc = (item, index, arr) => {
        if (arr.length > 1)
            return [item, arr.slice(0, index).concat(arr.slice(index + 1, arr.length)).map(mapFunc)]
        else {
            return item
        }
    }
    // [a, b, c] --> [ [a, [ b, c ], [ c, b ] ], [ b, [ a, c], [c, a] ], [ c, [a, b], [ b, a ]]]
    // [a, b, c, ... ] --> [ [ a, [ b, [ c, [...] ] ] ] ]

    let reduceFunc = (acc, val) => {
        let string = val[0]
        if (!Array.isArray(val[1])) {
            acc.push(string)
        } else {
            for (let i = 1, len = val.length; i < len; i++) {
                let iResult = val[i].reduce(reduceFunc, []).map((item) => string + item)
                acc = acc.concat(iResult)
            }
        }
        return acc
    }

    const result = strArr.map(mapFunc).reduce(reduceFunc, [])
}

let C = (str) => {
    if ( typeof str === "string" ) {
        return C(str.split(""))
    } else if ( !Array.isArray( str ) ) {
        console.log("Not Array")
        return []
    }
    if (str.length <= 1) {
        return str
    } else {
        return str.reduce( ( acc, val, index, arr ) => {
            // Array without value
            const newArr = arr.slice(0, index).concat( arr.slice( index + 1, arr.length ) )
            return acc.concat( C( newArr ).map( mapVal => "" + val + mapVal ) )
        }, [] ) // acc
    }
}

console.log(C([1, 2, 3]))
console.log(C(""))
console.log(C("a"))
console.log(C("ab"))
console.log(C("abc"))
console.log(C("abcd").length)
console.log(C("abcde").length)
console.log(C("abcdef").length)
console.log(C("1234")[20])