namespace advancedTypes {
  // 交叉类型,将多个类型合并为一个类型
  function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
  }

  class Person {
      constructor(public name: string) { }
  }
  interface Loggable {
      log(): void;
  }
  class ConsoleLogger implements Loggable {
      log() {
          // ...
      }
  }
  var jim = extend(new Person("Jim"), new ConsoleLogger());
  var n = jim.name;
  jim.log();

  // 联合类型
  function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  // 联合类型，我们只能访问此联合类型的所有类型里共有的成员。
  interface Bird {
    fly(): void;
    layEggs(): void;
  }

  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  function getSmallPet(): Fish | Bird {
      // ...
      return;
  }

  let pet = getSmallPet();
  pet.layEggs(); // okay
  // pet.swim();    // errors

  // 类型保护与区分类型
  if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
  }
  else {
    (<Bird>pet).fly();
  }
  
  // 用户自定义的类型保护
  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
  }

  if (isFish(pet)) {
    pet.swim();
  }
  else {
    pet.fly();
  }

  // typeof类型保护
  function padLeft2(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  // instanceof类型保护
  interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
    }
  }

  class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
      return this.value;
    }
  }

  function getRandomPadder() {
    return Math.random() < 0.5 ?
      new SpaceRepeatingPadder(4) :
      new StringPadder("  ");
  }

  // 类型为SpaceRepeatingPadder | StringPadder
  let padder: Padder = getRandomPadder();

  if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
  }
  if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
  }
  
  // 可以为null的类型
  let s = "foo";
  // --strictNullChecks标记可以解决此错误
  s = null; // 错误, 'null'不能赋值给'string'
  let sn: string | null = "bar";
  sn = null; // 可以
  
  sn = undefined; // error, 'undefined'不能赋值给'string | null'
}