"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var myshape = new shape_1.shape(2, 3);
console.log(myshape.getInfo());
var mycircle = new circle_1.circle(2, 3, 4);
console.log(mycircle.getInfo());
