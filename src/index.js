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
    let result = '';
   for(let i=0; i<(expr.length/10);i++){
       let letter = expr.substr(i*10, 10);
       let element = '';
       for(let j=0;j<letter.length;j= j+2){
           if(letter === '**********') {
               element = ' ';
               break;
           }
            if(parseInt(letter[j]+letter[j+1]) === 10) {
                element = element + '.';
            }
           if(parseInt(letter[j]+letter[j+1]) === 11) {
               element = element + '-';
           }

       }
       if(element === ' ') {
           result = result + element;
       } else {
           result = result + MORSE_TABLE[element];
       }
   }
   return result;
}

module.exports = {
    decode
}