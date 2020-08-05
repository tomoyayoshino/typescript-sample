export {};

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('Tom', 24);
console.log(me);
