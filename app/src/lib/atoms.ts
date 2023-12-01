import { atom } from 'jotai'
import PropTypes from "prop-types";

export const selectedIslandAtom = atom<number>(1);
export const inputEnergyAtom = atom<number>(0);
export const inputSleepTimeAtom = atom<number>(0);
export const calcTimeAtom = atom<{hours: number, minutes: number}>({hours: 0, minutes: 0});