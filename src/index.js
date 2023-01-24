const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const point = '10';
    const hyphen = '11';
    const space = '**********';
    const code = expr.split(space);
    const answer = code.map((item) => { 
        let arr = [];
        for (let i = 0; i < item.length; i += 10) {
        const result = item
        .slice(i, i + 10)
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace(/00/g, '');
        arr.push(MORSE_TABLE[result]);
    }
    return arr.join('');
});
return answer.join(' ');
}

module.exports = {
    decode
}