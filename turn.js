let turn = (current, target) => {
    const directions = {
        N: {
            E: 'right',
            W: 'left',
        },
        E: {
            S: 'right',
            N: 'left'
        },
        S: {
            W: 'right',
            E: 'left'
        },
        W: {
            N: 'right',
            S: 'left'
        }
    }

    return directions[current][target];
}

turn = (x, y) => 'NESWN'.includes(x + y) ? 'right' : 'left';

console.log(turn('N', 'E'));// right
console.log(turn('S', 'W')); // right

