import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";

interface HashPair {
  key: number;
  value: number;
}

export function bestNapLength(energy: number, islandId: number) {
  const island = ISLANDS.find((island) => island.id == islandId) || ISLANDS[0]
  const borders = filterHashByValue(ENERGY_BORDER[island.name], (energy) * 100);
  return getValidCombinations(borders, (energy) * 100);
}


function filterHashByValue(hash: { [key: number]: number }, x: number): { [key: number]: number } {
  const filteredHash: { [key: number]: number } = {};
  for (const key in hash) {
    const value = hash[key];
    if (value <= x) {
      filteredHash[key] = value;
    }
  }
  return filteredHash;
}

const getValidCombinations = (hash: { [key: number]: number }, x: number): HashPair[][] => {
  const data = Object.entries(hash).filter(([key, value]) => value <= x);
  const allCombinations: HashPair[][] = [];

  for (const [key1, value1] of data) {
    for (const [key2, value2] of data) {
      const sum = value1 + value2;
      if (sum <= x) {
        allCombinations.push([{ key: Number(key1), value: value1 }, { key: Number(key2), value: value2 }]);
      }
    }
  }

  // 二つの値の key を合計して最大となる組み合わせを抽出
  const maxSum = allCombinations.reduce((max, combination) => {
    const sum = combination.reduce((acc, pair) => acc + pair.key, 0);
    return Math.max(max, sum);
  }, 0);

  return allCombinations.filter(combination =>
      combination.reduce((sum, pair) => sum + pair.key, 0) === maxSum
  );
};