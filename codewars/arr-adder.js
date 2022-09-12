const arrAdder = (arr) => arr[0].map((_, i) => arr.map(el => el[i]).join('')).join(' ');

console.log(arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
])); // Just Live Life Man

console.log(arrAdder([
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ])); // The Mitochondria is the powerhouse of the cell

