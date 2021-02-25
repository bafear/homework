function digitalClock(num){
    let s = num%60;
    num = (num - s)/60
    let m = num%60;
    num = (num - m)/60
    let h = num % 24;

    if (s < 10)
    s = '0'+s;
    if (m < 10)
    m = '0'+m;
    if (h < 10)
    h = '0'+h;


    return h+':'+m+':'+s
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));