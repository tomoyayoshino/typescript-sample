export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
}

// 欲しい情報を選ぶ
type SimpleProfile = Pick<DetailProfile, 'name' | 'weight'>;
// 要らない情報を除外する
type SmallProfile = Omit<DetailProfile, 'height'>;

type MyOmit = Pick<
  DetailProfile,
  Exclude<'name' | 'height' | 'weight' , 'height'>
>;
type MySmallProfile = MyOmit;
