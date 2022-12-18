let product1 = {};
product1.name = 't-skirt';
product1.brand = 'Roxy';
product1.price = '25$';
product1.show = function() {
    console.log(this.name, this.price)
}

let product2 = {
    name: 't-skirt',
    brand: 'Guess',
    price: '14$',
    show: function() {
        console.log(this.name, this.price)
    }
}

product1.show()
product2.show()
