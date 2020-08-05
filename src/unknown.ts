export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// タイプガードが重要
// Any型は極力使わない(TS使う意味があまりなくなってしまう)
// typeofを活用する
