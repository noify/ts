namespace variableDeclarations {
  let input = [1, 2];
  let [first, second] = input; // first2 1，second2 2
  [first, second] = [second, first]; // first2 2，second2 1
  
  type N = number;
  let num: N = 1;
  
  type T = { a: string, b?: number }
  function f({ a, b }: T): void {
    // ...
  }
  
  function f2({ a, b = 0 } = { a: "", b: 0 }): void {
    // ...
  }
  f2(); // ok, default to { a: "", b: 0 }
  f2({ a: "yes" }); // ok, default b = 0
  f2(); // ok, default to {a: ""}, which then defaults b = 0
  // f2({}); // error, 'a' is required if you supply an argument
  
  let firstArr = [1, 2];
  let secondArr = [3, 4];
  let bothPlus = [0, ...firstArr, ...secondArr, 5]; // [0, 1, 2, 3, 4, 5]
  
  let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  let search = { ...defaults, food: "rich" }; // { food: "rich", price: "$$", ambiance: "noisy" }
  search = { food: "rich", ...defaults }; // { food: "spicy", price: "$$", ambiance: "noisy" }
  
  class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  // clone.m(); // error!
}