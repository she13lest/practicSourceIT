let i = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";

console.log(i.replace(/([\w]+), ([\w]+)/gm, "$2 $1"));