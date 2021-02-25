function numberSplit(num){
let ar = []
    if(num%2 == 0){
        ar[0] = num/2
        ar[1] = ar[0]
    }else{
        num = num-1
        ar[0] = num/2
        ar[1] = ar[0] + 1
    }
    return ar;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));