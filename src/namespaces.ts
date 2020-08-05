export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka{
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('Tom');
console.log(me.name)
const meOsaka = new Japanese.Osaka.Person('john');
console.log(meOsaka.name)

const mike = new English.Person('Micheal', 'Joseph', 'Jackson');
console.log(mike)
