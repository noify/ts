let bool: boolean = false;
let num: number = 6;
let str: string = "bob";
let u: undefined = undefined;
let n: null = null;

// any 和 Object 类似，都允许你给它赋任意值；但 Object 不能够在它上面调用任意的方法，即便它真的有这些方法
let obj: Object = {};
let any: any = {};

let arr: Array<any> = [];
let list: number[] = [1, 2, 3];
let x: [string, number] = ['hello', 10];
x[3] = 'world'; // 联合类型

let date: Date = new Date();
let fun: Function = function (){};

enum Color {Red = 0, Green, Blue}
let c: Color = Color.Green;

let colorName: string = Color[2]; // 赋值'Blue'因为上面代码里它的值是2

function warnUser(): void {
  alert("This is my warning message");
}

let unusable: void = undefined;
unusable = null;

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

strLength = (someValue as string).length;