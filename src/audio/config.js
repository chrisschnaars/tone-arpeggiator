import getRandomInt from "../utils/getRandomNumber";

// Number of beats (equals number of tone toggles)
export const NUMBER_OF_BEATS = 8;

// Frequency options
export const FREQUENCIES = [
  {
    frequency: 110,
    note: "A",
  },
  {
    frequency: 130.81,
    note: "C",
  },
  {
    frequency: 138.59,
    note: "C#",
  },
  {
    frequency: 146.83,
    note: "D",
  },
  {
    frequency: 164.81,
    note: "E",
  },
];

// Interval for each note of the arpeggiator
export const INTERVALS = [
  1,
  16 / 15,
  9 / 8,
  6 / 5,
  5 / 4,
  4 / 3,
  25 / 18,
  3 / 2,
  8 / 5,
  5 / 3,
  9 / 5,
  15 / 8,
  2 / 1,
];

// Get a random array of intervals
export const randomIntervalArray = (arrLength) => {
  const arr = [];
  for (let i = 0; i < arrLength; i++) {
    const n = getRandomInt(INTERVALS.length);
    arr.push(n);
  }
  return arr;
};
