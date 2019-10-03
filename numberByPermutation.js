const permutation = [3, 2, 1]
const n = permutation.length
let f = [1]
for (let i = 1; i < n; i ++ ) f[i] = f[i - 1] * i

let d = new Array( n ).fill( 0 )

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if ( permutation[j] < permutation[i] ) {
            d[i] ++
        }
    }
}

const result = d.reduce( ( acc, valD, index ) => acc + valD * f[n - index - 1], 1)
console.log(permutation, d, result, f)