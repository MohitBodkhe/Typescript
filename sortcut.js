"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer = /** @class */ (function () {
    function customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return customer;
}());
exports.customer = customer;
var my = new customer("ohit", "mohit");
console.log(my.firstName);
console.log(my.lastName);
