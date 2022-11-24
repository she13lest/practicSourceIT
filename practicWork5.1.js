var s = 'Мы знаем, что монохромный цвет - это градации серого';
var txt = 'хром';
var word;

let newArr = s.split(' ')

let res = newArr.map((item, i) => item.indexOf(txt) >= 0 ? i : -1).filter(item => item >= 0)

word = newArr[res]

console.log(word)
