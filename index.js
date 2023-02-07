var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.toString = function () {
        return "Shape[area=".concat(this.getArea(), "]");
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(id, edge) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.edge = edge;
        return _this;
    }
    // override base class's abstract method
    Square.prototype.getArea = function () {
        return Math.pow(this.edge, 2);
    };
    return Square;
}(Shape));
var rec = new Square(1, 4);
console.log(rec.id); // 1
console.log(rec.getArea()); // 16
console.log(rec.toString()); // Shape[area=16]
