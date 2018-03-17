let bool: boolean = false;
let num: number = 6;
let str: string = "bob";
let fun: Function = function (){};
let u: undefined = undefined;
let n: null = null;


let date: Date = new Date();

let obj: Object = {};
let any: any = {};

let arr: Array<any> = [];
let arr2: any[] = [];
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green;

let colorName: string = Color[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list4: any[] = [1, true, "free"];

list4[1] = 100;

function warnUser(): void {
  alert("This is my warning message");
}

let unusable: void = undefined;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;