function sumTwoSmallestNums(){
    let num1 = Math.max(...arguments), num2 = Math.max(...arguments)
    let loop = 0
    
    while(loop < arguments.length){
        let a = 0
        while(a <= loop){
            if(arguments[loop] > 0){
                if(arguments[loop] < num1)
                num1 = arguments[loop];
            }
            a++
        }
        loop++
    }
    loop = 0
    while(loop < arguments.length){
        let a = 0
        while(a <= loop){
            if(arguments[loop] > 0){
                if(arguments[loop] != num1){
                    if(arguments[loop] < num2)
                    num2 = arguments[loop];
                }
            }
            a++
        }
        loop++
    }
        
    return num1+num2;
}

console.log(sumTwoSmallestNums(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNums(10, 343445353, 343445, 34535445353453));
console.log(sumTwoSmallestNums(2, 9, 6, -1));
console.log(sumTwoSmallestNums(879, 953, 694, -847, 342, 221, -91, -723, 791, -587));
console.log(sumTwoSmallestNums(3683, 2902, 3951, -475, 1617, -2385));