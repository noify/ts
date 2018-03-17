var bool = false;
var num = 6;
var str = "bob";
var fun = function () { };
var u = undefined;
var n = null;
var date = new Date();
var obj = {};
var any = {};
var arr = [];
var arr2 = [];
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
x[3] = 'world';
console.log(x[5].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
var colorName = Color[2];
alert(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
var list4 = [1, true, "free"];
list4[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = "this is a string";
var strLength2 = someValue.length;
//# sourceMappingURL=basic-types.js.map