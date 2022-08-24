import { shape } from "./shape";
import { circle } from "./circle";

let myshape=new shape(2,3);
console.log(myshape.getInfo())

let mycircle=new circle(2,3,4);
console.log(mycircle.getInfo());