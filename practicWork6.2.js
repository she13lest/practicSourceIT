function Storage(initialValues) {
    
    this.values = initialValues || {};

}

Storage.prototype.get = function(key) {
    return this.values[key];
}

Storage.prototype.set = function(key, value) {
    return this.values[key] = value;
}


let products = new Storage({'phone':'brand'});
let phoneBrand = products.get('phone');
products.set('tablet', 'tabletBrand')
// console.log(products)
console.log(phoneBrand)