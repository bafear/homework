function removeDups(){
    let ar = []
    let arg = 0;
    let loop = 1;
    let add = true;
    ar[0] = arguments[0]
    while(loop < arguments.length){
        let a = 0
        while(a < loop){
            if(arguments[loop] === ar[a]){
                add = false
                break
            }
            else{
                add = true
                a++
            }
        }

        if(add){
            arg++;
            ar[arg] = arguments[loop]
        }
        loop++
    }//arg = 1 , loop = 2
    return ar;
}

console.log(removeDups(1, 0, 1, 0));
console.log(removeDups("The", "big", "cat"));
console.log(removeDups("John", "Taylor", "John"));