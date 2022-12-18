let x = [3, 10];
let y = [];
x[77] = 7;

for(let i = 0; i < x.length; i++) {
    y.push(Math.pow((x[i]), 2))
}


for(let val in x) {
    y.push(Math.pow((x[val]), 2))
}


for(let val of x) {
    y.push(Math.pow(val, 2))
}
console.log(y)