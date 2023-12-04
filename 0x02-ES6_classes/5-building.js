export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('sqft must be a number');
    this._sqft = sqft;
    if (this.constructor !== Building) this.evacuationWarningMessage();
  }

  // set etter for sqft
  get sqft() {
    return (this._sqft);
  }

  // set setter for sqft
  set sqft(thisSqft) {
    if (typeof thisSqft !== 'number') throw new Error('sqft must be a number');
    this._sqft = thisSqft;
  }

  // subclasses implementation
  evacuationWarningMessage() {
    this.sqft = this._sqft;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
