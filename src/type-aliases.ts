export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Tom',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Tom',
  age: 43
};

type Profile2 = typeof example1;
