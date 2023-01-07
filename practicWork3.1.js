const rows = 9;
let res = '';


const printRow = (numSpace, numStar, symbSpace, symbStar) => {
    res = '';

    for(let k = 1; k <= numSpace; k++){
        res += symbSpace;
    
    }

    for(let k = 1; k <= numStar; k++){
        res += symbStar;
    }
}

for(let i = 1; i <= rows; i++){
    let numSpace = rows - i;
    let numStar = i * 2 - 1;
    printRow(numSpace, numStar, ' ', '$')
   
    console.log(res)
}