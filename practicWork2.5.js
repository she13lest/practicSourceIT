const space = ' ';
const star = '*';
const rows = 9;
let res = '';
let spaces;
let stars;

for(let i = 1; i <= rows ; i++){
    
    res = '';

    spaces = rows - i;
    for(let k = 1; k <= spaces; k++){
        res += space;
    
    }

    stars = i * 2 - 1;
    for(let k = 1; k <= stars; k++){
        res += star;
    }
    console.log(res)
}

