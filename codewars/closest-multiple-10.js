let closestMultiple10 = (num) => (num - (num % 10)) + (Math.round((num % 10) / 10) * 10) ;

closestMultiple10 = num => Math.round(num / 10) * 10;

console.log(closestMultiple10(54)); // 50
console.log(closestMultiple10(55)); // 60
