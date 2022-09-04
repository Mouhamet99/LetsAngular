var a;
var b;
var c;
var d;
var e;
var f = [1, 2];
var g = [1, "2", true];
var ColorGreen = 0;
var ColorRed = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
// Types assertions
var message;
message = 'abc';
// let endsWithC = message.endsWith('c') // no autocompletion
var endsWithC = message.endsWith('c');
var AlternativeWay = message.endsWith('c');
console.log({ endsWithC: endsWithC, AlternativeWay: AlternativeWay });
function drawPoint(point) {
    console.log('drawing point');
}
drawPoint({ x: 0, y: 1 });
