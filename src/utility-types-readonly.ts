export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Tom',
  age: 24
};

me.age++

console.log(me)

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'YO',
  age: 40
};

// friend.age++

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
