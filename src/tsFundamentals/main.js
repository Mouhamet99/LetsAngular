var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X:" + this.x + ", Y:" + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("value can not be less than zero");
        }
        this.x = value;
    };
    return Point;
}());
var point = new Point(1, 2);
var x = point.getX();
console.log({ x: x });
point.setX(10);
point.draw();
