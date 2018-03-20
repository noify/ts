namespace interfaces{
 interface LabelledValue {
    label: string; // 必须包含一个label属性且类型为string
    readonly color?: string; // 只读 可选属性
    [propName: string]: any; // 任意数量的其它属性
    [index: number]: string; // 可索引的类型
  }

  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  interface SquareConfig {
    color?: string;
    width?: number;
    // 添加一个字符串索引签名
    // [propName: string]: any;
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  // error: 'colour' not expected in type 'SquareConfig'
  // createSquare({ colour: "red", width: 100 });

  // 使用类型断言，绕过检查
  createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

  // 将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
  let squareOptions = { colour: "red", width: 100 };
  createSquare(squareOptions);

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  
  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  }

  // 类类型
  interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date): void;
  }

  class Clock implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }

  // 静态部分的类型和实例的类型
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
    tick(): void;
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("tick tock");
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);

  // 继承接口
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = <Square>{};
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;

  // 混合类型
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  // 接口继承类
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class TextBox extends Control {
    select() { }
  }

  // 错误：“Image”类型缺少“state”属性。
  // class Image implements SelectableControl {
  //   select() { }
  // }

  class Location {

  }
}