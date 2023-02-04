let reg = /^\d{1,2}\-\d{1,2}\-\d{4}$/
// let reg = /\d\d?-\d\d?-\d{4}/

let date1 = 25-07-2021
let date2 = 25-7-2021
let date3 = 1-1-2021
let date4 = 2-12-1979

console.log(reg.test(date1))
console.log(reg.test(date2))
console.log(reg.test(date3))
console.log(reg.test(date4))

