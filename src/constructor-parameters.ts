export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

const profile: Profile = ['Tom', 24];
const tom = new Person(...profile);
console.log(tom)
