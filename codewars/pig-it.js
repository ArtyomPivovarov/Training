const pigIt = (str) => str.replace(/\b(\w)(\w*)\b/gi, '$2$1ay');

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
console.log(pigIt('O emporatay o oresmay !')); // elloHay orldway !
