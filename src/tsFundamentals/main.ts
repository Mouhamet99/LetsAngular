class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log('X:' + this.x + ', Y:' + this.y);
  }

  getX() {
    return this.x;
  }

  setX(value: number) {
    if (value < 0) {
      throw new Error('value can not be less than zero');
    }
    this.x = value;
  }
}
let point = new Point(1, 2);
let x = point.getX();
console.log({ x });
point.setX(10);
point.draw();
