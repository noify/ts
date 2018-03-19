var bool = false;
var num = 6;
var str = "bob";
var u = undefined;
var n = null;
var obj = {};
var any = {};
var arr = [];
var list = [1, 2, 3];
var x = ['hello', 10];
x[3] = 'world';
var date = new Date();
var fun = function () { };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
unusable = null;
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
strLength = someValue.length;
//# sourceMappingURL=basic-types.js.map