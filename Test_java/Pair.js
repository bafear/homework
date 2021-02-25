function simplePair(){
    let loop = 0
    
    while(loop < arguments[0].length){
        //console.log(arguments[0][loop]);
        let a = 0;
        while(a < loop){
            if(arguments[0][a] * arguments[0][loop] == arguments[1]){
                return [arguments[0][a], arguments[0][loop]]
            }
            a++
        }
        loop++
    }
    return null
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));