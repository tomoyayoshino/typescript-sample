export {};

interface Profile {
  underTwenty: boolean;
  [ index: string ]: string | number | boolean;
}
let profile: Profile = { name: 'Tom', underTwenty: false };
// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Tom';
profile.age  = 24;
profile.nationality = 'Japan'
