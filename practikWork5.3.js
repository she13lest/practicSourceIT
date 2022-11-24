const strPad = (input, fullLen, fillStr, fillType) => {
    
    if(fillType === 'FILL_LEFT') {
        return input.padStart(fullLen, fillStr)
    } else  if(fillType === 'FILL_BOTH') {
        let lengOfSymb = (fullLen - input.length) / 2
        let lengForAdd = fullLen - lengOfSymb
        
        let res =  input.padStart(lengForAdd, fillStr)
        return res.padEnd(fullLen, fillStr)

    } else {
        return input.padEnd(fullLen, fillStr)
    }

}

console.log(strPad('star', 10, '_*_'))
console.log(strPad('star', 8, '_*_', 'FILL_LEFT'))
console.log(strPad('star', 8, '*', 'FILL_BOTH'))