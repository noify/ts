namespace basicTypes {
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

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a; // 只读，把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
  
  // 不过可以用类型断言重写
  // ro[0] = 12; // error!
  (<number[]>ro)[0] = 12;
  // ro.push(5); // error!
  (<number[]>ro).push(5);
  // ro.length = 100; // error!
  (<number[]>ro).length = 100;
  // a = ro; // error!
  a = ro as number[];
}