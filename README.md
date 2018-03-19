# TypeScript

## 准备

```bash
# 安装
npm install -g typescript

# 配置 tsconfig.json

# 编译并监听
tsc -w
```

## 基础类型

声明变量时必须要定义数据类型

```ts
// 基本数据类型
let bool: boolean = false;
let num: number = 6;
let str: string = "bob";
let u: undefined = undefined;
let n: null = null;

// any 和 Object 类似，都允许你给它赋任意值；但 Object 不能够在它上面调用任意的方法，即便它真的有这些方法
let obj: Object = {};
let any: any = {};

// 数组
let arr: Array<any> = [];
let list: number[] = [1, 2, 3];
let x: [string, number] = ['hello', 10];
x[3] = 'world'; // 联合类型

// 其他
let date: Date = new Date();
let fun: Function = function (){};
```

枚举类型

```ts
enum Color {Red = 0, Green, Blue}
let c: Color = Color.Green;

let colorName: string = Color[2]; // 赋值'Blue'因为上面代码里它的值是2
```

void 和 never

 - void： 没有任何类型，无返回值
 - never：永不存在的值的类型

```ts
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
```

断言，只在编译阶段起作用

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

strLength = (someValue as string).length;
```

## 接口

定义接口

```ts
 interface LabelledValue {
    label: string; // 必选属性 且类型为string
    readonly color?: string; // 只读 可选属性 且类型为string
    [propName: string]: any; // 任意数量的不限类型的其它属性
  }
```

绕过接口属性检查的三种方式

  - 使用类型断言(最简便)
  - 添加一个字符串索引签名(最佳)
  - 将对象赋值给一个另一个变量(最怪异)

```ts
// 使用类型断言
createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 添加一个字符串索引签名
interface SquareConfig {
  // ...
  [propName: string]: any;
}

// 将对象赋值给一个另一个变量
let squareOptions = { colour: "red", width: 100 };
createSquare(squareOptions);
```