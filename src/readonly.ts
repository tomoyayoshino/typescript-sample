export {};

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('Tom');
console.log(myVisaCard.owner)
// myVisaCard.owner = 'YO';
