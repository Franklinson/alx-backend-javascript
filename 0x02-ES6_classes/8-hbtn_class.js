export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error('size must be a number and location a string');
    this._size = size;
    this._location = location;
  }

  // set override number casting
  valueOf() {
    return (this._size);
  }

  // set override string casting
  toString() {
    return (this._location);
  }
}
