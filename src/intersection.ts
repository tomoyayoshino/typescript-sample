export {};

type Pitcher1 = {
  speed: number;
};

type Batter1 = {
  average: number;
};

const sasaki: Pitcher1 = {
  speed: 154
};

const ochiai: Batter1 = {
  average: 0.367
};

// type TwoWayPlayer = {
//   speed: number;
//   average: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const ohtani: TwoWayPlayer = {
  speed: 165,
  average: 0.286
}
