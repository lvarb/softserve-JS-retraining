function printChristmasTree(rows){
    let result = '';
    let spaces = ' ';
    let asterix = '*';

    for (let i = 1; i <= rows; i++) {
        let astrerixCount = 2*i - 1;
        let row = spaces.repeat(rows - i) + asterix.repeat(astrerixCount) + '\n';
        result += row;
    }

    return result;
}

function mostCommonLetters(text){
    let letters = {};

    for (let i = 0; i < text.length; i++) {
       if(letters[text[i]] === undefined){
        letters[text[i]] = 1;
       }else{
        letters[text[i]]++;
       }
    }
   
    let count = Math.max(...Object.values(letters));
    let mostCommon = Object.keys(letters).filter(key => letters[key] === count);

    let result = mostCommon.length > 1 ? `The most common letters are "${mostCommon}"  and occur: ${count} times` 
    : `The most common letter is  "${mostCommon}" and occur: ${count} times`;

    return result;
}

console.log(printChristmasTree(8));
console.log(mostCommonLetters('szxzshpswsp'));
