export {};

// owner: 所有者、初期化時に設定できる、途中で変更できない、参照はできる
// secretNumber: 個人番号、初期化時に設定できる、途中で変更できる、参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 参照のみできる
  get owner() {
    return this._owner;
  }
  // 書き換えのみできる
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard('Tom', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card.owner = 'YO'
console.log(card.owner)
// card.secretNumber;
// card._secretNumber;
console.log(card.secretNumber);
// > undefined
