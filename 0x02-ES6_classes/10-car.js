export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // to return a new object
  cloneCar() {
    return this[Symbol.species];
  }

  // set override symbol species
  get [Symbol.species]() {
    return new this.constructor();
  }
}
