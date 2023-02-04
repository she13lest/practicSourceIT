function Product (title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
   
}

Product.prototype.show = function(){
    console.log(this.title + ' ' + this.price)
};

let product1 = new Product('usb', 2022, '24$')
product1.show()