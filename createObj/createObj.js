/////////////////////////////Create object 1
let newObj = new Object();
newObj.prop1 = "prop1"
console.log(newObj.prop1)

/////////////////////////////Create object 2
let obj1 = {
  prop1: 'value1',
  prop2: function(){
    console.log(this.prop1);
  }
}
obj1.prop2();


/////////////////////////////Create object 3
let obj3 = Object.create({}, {
  prop1: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 'prop1'
  }
});
console.log(obj3.prop1);

/////////////////////////////Create object 4
function Car(brand, price){
  this.brand = brand;
  this.price = price;
}
let car1 = new Car("Dacia", 7000);
console.log("Brand: " + car1.brand + "\nPrice: " + car1.price);