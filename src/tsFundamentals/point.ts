export class Point {
  constructor(private _x?: number, private y?: number) {}

  draw() {
    console.log('x:' + this._x + ', Y:' + this.y);
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    if (value < 0) {
      throw new Error('value can not be less than zero');
    }
    this._x = value;
  }
}
