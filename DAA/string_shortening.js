var DICTIONARY = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');
var base = DICTIONARY.length;
function encodeId(num){
    var encoded = '';
    if(num==0){
        encoded = DICTIONARY[0];
    }

    while(num>0){
        encoded += DICTIONARY[(num%base)];
        num = Math.floor(num/base);
    }
    return reverseWord(encoded);
}

function reverseWord(str){
    var reversed ='';
    for(var i=str.length-1;i>=0;i--){
        reversed += str[i];
    }

    return reversed;
}

function decode(num){
    decoded = 0;
    for(index=0;index<num.split('').length;index++){
        decoded = decoded*base + DICTIONARY.indexOf(num.charAt(index))
    }
    return decoded;
}


encodeId(34526);
console.log(decode('jra'));