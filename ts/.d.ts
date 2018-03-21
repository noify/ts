// 描述文件

declare namespace OOO{
  var aaa: number | string
  function getName(id: number | string): string
  class Person {

    static maxAge: number //静态变量
    static getMaxAge(): number //静态方法

    constructor(name: string, age: number) //构造函数
    getName(id: number): string //实例方法
  }
  namespace O2{
    let b:number
  }
}

declare function $2(s:string): void

declare namespace $2{
  let aaa:number
}

declare module "app" {
  export let a: number
  export function b(): number
  export namespace c{
    let cd: string
  }
}

interface Date {
  format(f: string): string
}

// 定义 jQuery 需要用到的类型命名空间
declare namespace JQuery {
  // 定义基本使用的类型
  type Selector = string;
  type TypeOrArray<T> = T | T[];
  type htmlString = string;
}

// 定义 jQuery 接口，jquery 是一个 包含 Element 的集合
interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
  length: number;
  eq(index: number): this;
  
  // 重载
  add(selector: JQuery.Selector, context: Element): this;
  add(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery.htmlString | JQuery): this;
  
  children(selector?: JQuery.Selector): this;
  css(propertyName: string): string;
  html(): string;
}

// 对模块 jquery 输出接口
declare module 'jquery' {
  // module 中要使用 export = 而不是 export default
  export = jQuery;
}