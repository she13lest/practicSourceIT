let product1 = {};
product1.name = 't-skirt';
product1.brand = 'Roxy';
product1.price = '25$';

let product2 = {
    name: 't-skirt',
    brand: 'Guess',
    price: '14$'
}

let objProp = (obj) => {
    let res = []
    for(let value in obj) {
        res += [value]+ ' '
    }
    console.log(res)
}

objProp(product1)
objProp(product2)