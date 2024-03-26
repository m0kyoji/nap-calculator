import { atom } from 'jotai'

export const selectedIslandAtom = atom<number>(1);
export const inputEnergyAtom = atom<number>(0);
export const inputSleepTimeAtom = atom<number>(0);
export const napLengthAtom = atom<HashPair[]>([{ daytime: { key: 0, value: 0 }, nighttime: { key: 0, value: 0 } }]);
