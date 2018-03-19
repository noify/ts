namespace interfaces{
 interface LabelledValue {
    label: string; // 必须包含一个label属性且类型为string
    readonly color?: string; // 只读 可选属性
    [propName: string]: any; // 任意数量的其它属性
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
}