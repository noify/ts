namespace classes{
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  let greeter = new Greeter("world");

  // 继承
  class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);

  // 默认public

  // private,不能在声明它的类的外部访问
  class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  class Rhino extends Animal2 {
    constructor() { super("Rhino"); }
  }

  class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  let animal = new Animal2("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");

  animal = rhino;
  // animal = employee; // 错误: Animal 与 Employee 不兼容.

  // protected,protected成员在派生类中仍然可以访问
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
  }

  class Employee2 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee2("Howard", "Sales");
  console.log(howard.getElevatorPitch());
  // console.log(howard.name); // 错误

  // 构造函数也可以被标记成 protected
  class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
  }
  // Employee 能够继承 Person
  class Employee3 extends Person2 {
      private department: string;

      constructor(name: string, department: string) {
          super(name);
          this.department = department;
      }

      public getElevatorPitch() {
          return `Hello, my name is ${this.name} and I work in ${this.department}.`;
      }
  }

  let howard2 = new Employee3("Howard", "Sales");
  // let john = new Person2("John"); // 错误: 'Person' 的构造函数是被保护的.

  // readonly修饰符,只读属性必须在声明时或构造函数里被初始化。
  class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
      this.name = theName;
    }
  }
  let dad = new Octopus("Man with the 8 strong legs");
  // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

  // 参数属性
  class Animal3 {
    // 仅在构造函数里使用 private name: string参数来创建和初始化 name成员。 把声明和赋值合并至一处。
    constructor(private name: string) { }
    move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  // 存取器
  /*
  可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工
  存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3
  只带有 get不带有 set的存取器自动被推断为 readonly
   */
  let passcode = "secret passcode";

  class Employee4 {
    private _fullName: string;

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      }
      else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }

  let employee4 = new Employee4();
  employee4.fullName = "Bob Smith";
  if (employee4.fullName) {
      alert(employee4.fullName);
  }

  // 静态属性,存在于类本身上面而不是类的实例上
  class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
  console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

  // 抽象类
  abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
      console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
  }

  class AccountingDepartment extends Department {

    constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
      console.log('Generating accounting reports...');
    }
  }

  let department: Department; // 允许创建一个对抽象类型的引用
  // department = new Department(); // 错误: 不能创建一个抽象类的实例
  department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
  department.printName();
  department.printMeeting();
  // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

  // 构造函数
  class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
      if (this.greeting) {
        return "Hello, " + this.greeting;
      }
      else {
        return Greeter2.standardGreeting;
      }
    }
  }

  let greeter1: Greeter;
  greeter1 = new Greeter2();
  console.log(greeter1.greet());

  let greeterMaker: typeof Greeter2 = Greeter2;
  greeterMaker.standardGreeting = "Hey there!";

  let greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());

  // 把类当做接口使用
  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = {x: 1, y: 2, z: 3};
}