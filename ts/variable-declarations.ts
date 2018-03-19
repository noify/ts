let input = [1, 2];
let [first2, second2] = input; // first2 1，second2 2
[first2, second2] = [second2, first2]; // first2 2，second2 1

type N = number;
let numb: N = 1;

type C = { a: string, b?: number }
function f({ a, b }: C): void {
  // ...
}

function f2({ a, b = 0 } = { a: "", b: 0 }): void {
  // ...
}
f2(); // ok, default to { a: "", b: 0 }
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; // [0, 1, 2, 3, 4, 5]

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" }; // { food: "rich", price: "$$", ambiance: "noisy" }
search = { food: "rich", ...defaults }; // { food: "spicy", price: "$$", ambiance: "noisy" }

class C2 {
  p = 12;
  m() {
  }
}
let c2 = new C2();
let clone = { ...c2 };
clone.p; // ok
// clone.m(); // error!