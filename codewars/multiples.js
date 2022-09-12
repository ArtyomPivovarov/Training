let multiples = (m, n) => {
    const arr = [];

    for (let i = 1; i <= m; i++)
        arr.push(i);

    return arr.map(el => el * n);
}

multiples = (m, n) => Array.from(Array(m), (_, i) => ++i * n);

multiples = (m, n) => Array(m).fill(n).map((el, i) => n * ++i);

multiples = (m, n) => Array.from({ length: m }).map((_, i) => ++i * n);

multiples = (m, n) => Array.from({ length: m }, (_, i) => ++i * n);
console.log(multiples(3, 5.0)); // [ 5, 10, 15 ]
console.log(multiples(4, 5.0)); // [ 5, 10, 15, 20 ]
console.log(multiples(5, 2.0)); // [ 2, 4, 6, 8, 10 ]

