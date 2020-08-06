export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// 三項演算子を使っているが、100%、Rしかこない
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
