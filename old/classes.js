// class Vehicle {
//   constructor (make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.age = new Date().getFullYear() - year;
//   }
// }

// // Create instance of Vehicle and invoke constructor
// const myVehicle = new Vehicle('Tesla', 'S', 2020)

// console.log(myVehicle);


class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  myMake = () => {
    console.log(`My make is : ${this.make}`);
  }

  myModel = () => {
    console.log(`My model is : ${this.model}`);
  }

  static iAmA = () => {
    console.log('I am a vehicle');
  }
}

// // Create instance of Vehicle and invoke constructor
// const myVehicle = new Vehicle('Tesla', 'S', 2020);
// myVehicle.myMake();
// myVehicle.myModel();
// Vehicle.iAmA();


// class Truck extends Vehicle {
//   constructor(make, model, year, bedLength, towCapacity) {
//     super(make, model, year);
//     this.bedLength = bedLength;
//     this.towCapacity = towCapacity;
//   }

//   static iAmA() {
//     console.log('I am a truck');
//   }
// }

// Create instance of Truck and invoke constructor
// const myTruck = new Vehicle('Toyota', 'Tacoma', 2010, 6, 1500);
// myTruck.myMake();
// myTruck.myModel();
// Truck.iAmA();
