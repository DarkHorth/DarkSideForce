export class Point {

  // => void
  constructor(private _x?: number, private _y?: number) {
      this._x = _x;
      this._y = _y;
  }
  draw() {
      console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  get x() {
      return this._x;
  }
  getY() {
      return this._y;
  }
  // getDistance(another: Point) {
  // }
  set x(value ) {
      if (value < 0) {
          throw new Error('Value cannot be less than 0.');
      }
      this._x = value;
  }
}
