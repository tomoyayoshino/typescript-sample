export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Utility型
// 全部optionalな型
type PartialType = Partial<Profile>;
// 全部必須の型
type RequiredType = Required<Profile>;
