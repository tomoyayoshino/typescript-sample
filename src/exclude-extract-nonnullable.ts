export {};

// 既存の方を再利用して、新たな方を作ることができる

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// Functionを指定すると、関数の型を除外できる
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// 特定の型を抽出できる
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtracting = Extract<SomeTypes, Function>;

// null,undefinedを除外できる
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
