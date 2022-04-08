let transpose = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (cols > rows) {
        matrix = Array.from({ ...matrix, length: cols }, el => el ?? Array.from({ length: cols }, () => null));
    } else if (cols < rows) {
        matrix = matrix.map(el => Array.from({ ...el, length: rows }, el => el ?? null));
    }

    matrix.forEach((row, y) => {
        row.forEach((el, x) => {
            if (x > y) return;
            [matrix[y][x], matrix[x][y]] = [matrix[x][y], matrix[y][x]];
        })
    })

    return matrix.map(el => el.filter(el => el !== null)).filter(el => el.length);
}

transpose = m => m[0].map((_, i) => m.map(r => r[i]));

console.log(transpose([[1, 2], [3, 4], [5, 6]])); // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
console.log(transpose([[1]])); // [ [ 1 ] ]
console.log(transpose([ [ 1, 0, 0, 0, 1 ], [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ])); // [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]


