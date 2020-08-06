export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Tom', 24)

type Profile = Parameters<typeof debugProfile>;
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile)
