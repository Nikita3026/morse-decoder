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
    let result="";
    let array=[];
    let tempArray=[];
    let counter=0;
    let temp="";
    let tempstr;
    for(let i=0;i<expr.length;i++)
    {
        if(i%10==0 && i!=0)
        {
        counter++;
        array[counter]="";
        }
        if(i%10==0 && i==0)
        {
            array[counter]="";
        }
        array[counter]+=expr[i];
    }
    if(array[array.length-1].length<10)
    {
        for(let i=array[array.length-1].length;i<10;i++) array[array.length-1]="0"+array[array.length-1];
    }
    counter=0;
    for(let i=0;i<array.length;i++)
    {
        tempArray[i]="";
        for(let j=0;j<array[i].length;j++)
        {
            temp+=array[i][j];
            if(temp=="00") temp="";
            if(temp=="10"){
                temp="";
                tempArray[i]+=".";
            }
            if(temp=="11"){
                temp="";
                tempArray[i]+="-";
            }
            if(temp=="**********")
            {
                temp="";
                tempArray[i]+=" ";
            }
        }
    }
    temp="";
    here:  for(let i=0;i<tempArray.length;i++){
        temp+=tempArray[i];
       for(let key in MORSE_TABLE){
            if(key==temp){
                result+=MORSE_TABLE[key];
                temp="";
                continue here;
            }
            if(temp==" "){
                temp="";
                result+=" ";
                continue here;
            }
        } 
    }
    return result;
}

module.exports = {
    decode
}