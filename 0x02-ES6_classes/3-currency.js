export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new Error('code must be a string');
    if (typeof name !== 'string') throw new Error('name must be a string');
    this._code = code;
    this._name = name;
  }

  // set getter for code
  get code() {
    return (this._code);
  }

  // set setter for code
  set code(thisCode) {
    if (typeof thisCode !== 'string') throw new Error('code must be a string');
    this._code = thisCode;
  }

  // set getter for name
  get name() {
    return (this._name);
  }

  // set setter for name
  set name(thisName) {
    if (typeof thisName !== 'string') throw new Error('name must be a string');
    this._name = thisName;
  }

  // displays a currency
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
