"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(thex, they, _radius) {
        var _this = _super.call(this, thex, they) || this;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ("redius:" + this._radius);
    };
    return circle;
}(shape_1.shape));
exports.circle = circle;
