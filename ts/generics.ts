namespace generics {
  // 泛型类型
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity;

  // 泛型类
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function(x, y) { return x + y; };

  // 泛型约束
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
  }

  // loggingIdentity(3);  // Error, number doesn't have a .length property

  loggingIdentity({length: 10, value: 3});

  // 使用泛型创建工厂函数时，需要引用构造函数的类类型
  class BeeKeeper {
    hasMask: boolean;
  }

  class ZooKeeper {
    nametag: string;
  }

  class Animal {
    numLegs: number;
  }

  class Bee extends Animal {
    keeper: BeeKeeper;
  }

  class Lion extends Animal {
    keeper: ZooKeeper;
  }

  function createInstance<A extends Animal>(c: new () => A): A {
      return new c();
  }

  createInstance(Lion).keeper.nametag;  // typechecks!
  createInstance(Bee).keeper.hasMask;   // typechecks!
}