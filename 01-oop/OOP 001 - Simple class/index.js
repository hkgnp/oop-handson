class Car {
  constructor(model, horsePower) {
    this.model = model;
    this.horsePower = horsePower;
  }

  setModel(carModel) {
    this.model = carModel;
  }

  getModel() {
    return this.model;
  }

  setHorsePower(carHorsePower) {
    this.horsePower = carHorsePower;
  }

  getHorsePower() {
    return this.horsePower;
  }
}

let car = new Car('Ford', 200);

car.setModel('Ford2');
console.log(car.getModel());

car.setHorsePower(250);
console.log(car.getHorsePower());
