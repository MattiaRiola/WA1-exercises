'use strict';

function CarList(){
    this.cars = [];
    this.add = (car) => { this.cars.push(car); };
}

function Car(make,model,year){ //this is the construction function
    this.make = make;
    this.model = model;
    this.year = year;
    this.isNew = () =>(year>2000);
}

let mycar1 = new Car('Eagle','Talon Tsi',1993);
let mycar2 = new Car('Fiat','Panda',1995);

let myGarage = new CarList();
myGarage.add(mycar1);
myGarage.add(mycar2);
console.log("My car1 : ");
console.log(mycar1);
console.log("My car2 : ");
console.log(mycar2);
console.log("My Garage : ");
console.log(myGarage);

debugger;
