import * as Tone from "tone";

const synth = new Tone.MembraneSynth().toDestination();

const ROOT_FREQUENCY = 220;

// https://fundamentals-of-piano-practice.readthedocs.io/chapter2/CH2.2.html
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

export const playSynth = (noteId) => {
  const note = ROOT_FREQUENCY * INTERVALS[noteId];
  synth.triggerAttackRelease(note, "8n");
};
