// const space = ' ';
// const star = '*';
// const rows = 9;
// let res = '';
// let spaces;
// let stars;

// for(let i = 1; i <= rows; i++){
    
//     res = '';

//     spaces = rows - i;
//     for(let k = 1; k <= spaces; k++){
//         res += space;
    
//     }

//     stars = i * 2 - 1;
//     for(let k = 1; k <= stars; k++){
//         res += star;
//     }
//     console.log(res)
// }


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






