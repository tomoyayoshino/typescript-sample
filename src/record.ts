export {};

// Record<K, T> 全てのレコードに同じ型を適用する場合のDRYを実現できる。

type Prefectures = 'Tokyo' | 'Osaka' | 'Chiba' | 'Shiga';

type Covid19InfectionInfo = {
  Kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { Kanji_name: '東京', confirmed_cases: 1960 },
  Osaka: { Kanji_name: '大阪', confirmed_cases: 249 },
  Chiba: { Kanji_name: '千葉', confirmed_cases: 2 },
  Shiga: { Kanji_name: '滋賀', confirmed_cases: 13},
};
