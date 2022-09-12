// @see https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
//     Example:
//
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
    let result = '';

    for (let i = 0; i < list.length; i++) {
        let j = i;
        result += list[i];

        while (Math.abs(list[j] - list[j + 1]) === 1) {
            j++;
        }

        if (i === j) {
            result += j < list.length - 1 ? ',' : '';
            continue;
        }

        if (j - i > 1) {
            result += '-';
        } else {
            result += ',';
        }

        result += list[j] + (j < list.length - 1 ? ',' : '');
        if (j !== i) {
            i = j;
        }
    }

    return result;
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) // "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 19, 20])) // "-6,-3-1,3-5,7-11,14,15,17-20"
