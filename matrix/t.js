const matrix = '1 2 3 4\n5 6 7 8\n9 8 7 6'
let rows = []
let columns = []
rows = matrix.split('\n')
rows = rows.map(value => value.split(' ').map(Number))
columns = rows.map((value, index) => {
    return rows.map(row => {
        console.log(row.length)
        return row[index]
    })
})
console.log(columns)