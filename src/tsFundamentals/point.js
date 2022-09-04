export class Point {
    constructor(_x, y) {
        this._x = _x;
        this.y = y;
    }
    draw() {
        console.log('x:' + this._x + ', Y:' + this.y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0) {
            throw new Error('value can not be less than zero');
        }
        this._x = value;
    }
}
