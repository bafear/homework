function capToFront(string){
    Up = '';
    down = '';
    const chars = string.split('');
    loop = 0
    while (loop < string.length){
        if (chars[loop] === chars[loop].toUpperCase()){
            Up = Up + chars[loop]}
        else{
            down = down + chars[loop]}
        loop++;
    }
    return Up+down;
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))
