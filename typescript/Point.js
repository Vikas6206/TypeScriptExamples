var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //Note in type script we don't have to initialize the varibles
        // The initilization happens automatically
        //'?' indicate the parameter is optional
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
