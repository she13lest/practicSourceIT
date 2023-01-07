let printNumbers = (max, cols) => {
    let res = [];
    let row = [];
    let num;
    let rows = Math.ceil(max/cols)

    for(let i = 0; i < rows; i++) {
      row = [];

      for(let k = 0; k < cols; k++) {
        num = i +(k * rows)
        if(num < max) {
            row.push(num)
        }
      }
      res.push(row.join(' '))
    }
    return res.join('\n');
}

console.log(printNumbers(12, 3))
