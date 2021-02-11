//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    rows;
    columns;
    constructor(matrix) {
        this.rows = matrix.split('\n').map(str => str.split(' ').map(Number))
        this.columns = this.rows[0].map((element, index) => {
            // rows[0] gives the map function full length to iterate over, if [0] was not given, a not square matrix will not work properly
            return this.rows.map(row => {
                return row[index]
            })
        })
    }

    get rows() {
        return this.rows
    }

    get columns() {
        return this.columns
    }
}