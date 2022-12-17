const compare = (x) => {
    return function(y) {
        if(y > x) {
            return 1
        } else if(y < x) {
            return -1
        } else {
            return null
        }
    }
}



let res = compare(2)

console.log(res(5))
console.log(res(1))