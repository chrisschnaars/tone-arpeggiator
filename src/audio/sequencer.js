// import * as Tone from "tone";
// import getRandomInt from "../utils/getRandomNumber";

// // set up the pattern
// // toggle playing
// // update notes

// export const NUMBER_OF_BEATS = 8; // Beats (toggles) in the arpeggiator
// export const FREQUENCIES = [110, 130.81, 138.89, 146.83, 164.81]; // Frequency options

// // Intertval/note options (translates to number of notes in each beat)
// export const INTERVALS = [
//   1,
//   16 / 15,
//   9 / 8,
//   6 / 5,
//   5 / 4,
//   4 / 3,
//   25 / 18,
//   3 / 2,
//   8 / 5,
//   5 / 3,
//   9 / 5,
//   15 / 8,
//   2 / 1,
// ];

// const synth = new Tone.Synth().toDestination();

// export const sequence = {
//   activeKey: FREQUENCIES[0],
//   intervalArray: [1, 1, 1, 1, 1, 1, 1, 1],

//   setupPattern() {
//     this.pattern = new Tone.Sequence(
//       (time, index) => {
//         if (this.intervalArray[index] !== null) {
//           const note = this.intervalArray[index] * this.activeKey;
//           synth.triggerAttackRelease(note, 0.125);
//         }
//       },
//       Array.from(this.intervalArray.keys()),
//       "4n"
//     );

//     this.pattern.start(0);
//   },

//   togglePlaying() {
//     Tone.Transport.toggle();
//   },

//   updateIntervalArray(index, val) {
//     this.intervalArray[index] = val;
//   },

//   randomizeIntervalArray() {
//     const arr = [];
//     for (let i = 0; i < NUMBER_OF_BEATS; i++) {
//       const n = getRandomInt(INTERVALS.length);
//       arr.push(n);
//     }
//     return arr;
//   },
// };

// // const setupAudio = {};

// // export const playSynth = () => {
// //   synth.triggerAttackRelease(220, 0.125);
// // };

// // // Create synth
// // const player = {
// //   synth: new Tone.MembraneSynth().toDestination(),
// //   keyFrequency: 220,
// //   activeTones: null,
// //   playing: false,
// //   sequence: null,
// //   bpm: 120,
// //   animationDelay: 0,

// //   setup() {
// //     this.setupSequence();
// //     this.setTempo(this.bpm);
// //     // this.setKeyFrequency();
// //     // this.resetActiveTones();
// //   },

// //   setupSequence() {
// //     this.sequence = new Tone.Sequence(
// //       function (time, i) {
// //         console.log(i);
// //         // Play each active tone
// //         // player.activeTones[i].forEach((interval) => {
// //         //   const f = interval * player.keyFrequency;
// //         //   player.synth.triggerAttackRelease(f, 0.125);
// //         // });
// //       },
// //       [0, 1, 2, 3, 4, 5, 6, 7],
// //       "4n"
// //     ).start(0);

// //     Tone.Transport.start();
// //   },

// //   togglePlaying() {
// //     Tone.Transport.toggle();
// //     this.playing = !this.playing;
// //   },

// //   setTempo(value) {
// //     Tone.Transport.bpm.value = value;

// //     if (value !== this.bpm) {
// //       this.bpm = value;
// //     }

// //     this.animationDelay = 30000 / value;
// //   },

// //   // setKeyFrequency(selectedKey = 0) {
// //   //   this.keyFrequency = keySettings[selectedKey].frequency;
// //   // },

// //   resetActiveTones() {
// //     this.activeTones = [[], [], [], [], [], [], [], []];
// //   },
// // };
