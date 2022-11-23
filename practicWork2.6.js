let date = new Date();
let hour = date.getHours();

let say;

if(0 < hour < 5) {
    say = 'Good night'
} else if(5 < hour < 11) {
    say = 'Good morning'
} else if(11 < hour < 17) {
    say = 'Good day'
} else if(17 < hour < 22) {
    say = 'Good evening'
} else {
    say = 'Good night'
}
console.log(say)