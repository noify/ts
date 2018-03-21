namespace enums {
  // 数字枚举
  const enum Direction {
    Up, // 默认 Up = 0，自增长
    Down,
    Left,
    Right
  }
  
  // 字符串枚举
  const enum DirectionStr {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  // 外部枚举
 // 外部枚举用来描述已经存在的枚举类型的形状。外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
  declare enum Enum {
    A = 1,
    B,
    C = 2
  }

}