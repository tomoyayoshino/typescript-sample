export {};

function double(value: number): number;
function double(value: string): string;

// シグネチャーで条件は絞れているので、分岐は2つだけで良い。

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('GO!'));
