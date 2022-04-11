let anagrams = (word = '', words = []) => {
    const getLettersInfo = (word) => {
        const wordArr = word.split('');
        return wordArr
            .filter((el, i, self) => self.indexOf(el) === i)
            .sort()
            .map(letter => letter + wordArr.reduce((count, el) => letter === el ? ++count : count, 0))
            .join('');
    }
    const wordInfo = getLettersInfo(word);

    return words.filter(el => wordInfo === getLettersInfo(el));
}

String.prototype.sort = function() {
    return this.split("").sort().join("");
};

anagrams = (word, words) => words.filter(x => x.sort() === word.sort());

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // []
