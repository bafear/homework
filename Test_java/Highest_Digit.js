function highestDigit(num){
    num = num + ''
    const chars = num.split('');
    ans = parseInt(chars[0])
    loop = 0
    while (loop < num.length){
        if (ans < parseInt(chars[loop+1])){
            ans = parseInt(chars[loop+1])}
        loop++;
    }
    return ans;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(7));