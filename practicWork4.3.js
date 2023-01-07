let fibsArr = [];

fibsArr[0] = 1;
fibsArr[1] = 1;

// console.log(fibsArr)

let createArrFib = (numEl) => {
    for(let i = 2; i < numEl; i++){
        fibsArr[i] = fibsArr[i-1] + fibsArr[i-2]
        
    }
    return fibsArr.slice(0, numEl)
}

console.log(createArrFib(100))