import { Point } from './point.js'

let point = new Point(1, 2);
let x = point.x;
console.log({ x });
point.x = 10;
point.draw();
