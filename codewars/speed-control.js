const gps = (s, x) => {
    if (!x?.length || x.length <= 1 || !s) return 0;

    const deltaDistanceArr = x.map((el, i) => x[i + 1] ? x[i + 1] - el : null).filter(el => el);
    const speedArr = deltaDistanceArr.map(el => Math.floor(Math.abs((3600 * el) / s)));

    return Math.max(...speedArr);
}

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])); // 41
console.log(gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25])); // 219

