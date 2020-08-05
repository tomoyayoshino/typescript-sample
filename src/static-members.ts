export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Tomoya';
  static lastName: string = 'Yoshino';

  static work() {
    return `Hey, guys! I am ${this.firstName}.`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
