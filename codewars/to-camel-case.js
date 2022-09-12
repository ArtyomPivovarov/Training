const toCamelCase = (str) => str.replace(/(?:-|_)(\w)/gi, (_, l) => l.toUpperCase());

console.log(toCamelCase('the-stealth-warrior')); // theStealthWarrior
console.log(toCamelCase('The_Stealth_Warrior')); // TheStealthWarrior
console.log(toCamelCase('')); // ''
console.log(toCamelCase('A-B-C')); // ABC

