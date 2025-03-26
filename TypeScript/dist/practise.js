"use strict";
//array object
let arr = [1, 2, 3, 4, 5];
console.log(arr);
//object
let person1 = {
    name: "ss",
    age: 12,
};
console.log(person1.age);
//function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// 
let a = 10;
let b = "hello";
let c = true;
console.log(a, b, c);
//enum
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
let col = color.blue;
console.log(col);
//tuple
let x;
x = ["hello", 10];
console.log(x);
let userId = "sss";
let value;
value = "hello";
value = 123;
//literal type
let ss;
ss = "success";
let user = { name: "ss", age: 12 };
//generics
function identity(arg) {
    return arg;
}
let num = identity(12);
let str = identity("hello");
console.log(num, str);
//class
class storage {
    constructor(value) {
        this.data = value;
    }
    getData() {
        return this.data;
    }
}
let mys = new storage(123);
console.log(mys.getData());
