function isValidIP(str){
    const words = str.split('.');
    if(words.length == 4){
        let a = words[3]
        const chars = a.split('');
        let loop = 0 
        while(loop < 4){
            if(words[loop] <= 0 || words[loop] >= 256){
                return false;
            }
            loop++
        }
        loop = 0
        while(loop < 3){
            if(chars[loop] == 0){
                return false;
            }
            loop++
        }
        return true;
    }
    return false;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
