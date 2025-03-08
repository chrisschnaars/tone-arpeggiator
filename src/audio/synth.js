import * as Tone from "tone";

// create a tremolo and start it's LFO
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();

const reverb = new Tone.Reverb(1).toDestination();
const autoFilter = new Tone.AutoFilter("4n").toDestination().start();

const synth = new Tone.Synth({
  oscillator: {
    type: "fmsine",
    harmonicity: 0.5,
    modulationType: "square",
  },
  envelope: {
    attackCurve: "exponential",
    attack: 0.05,
    decay: 0.2,
    sustain: 0.2,
    release: 1.5,
  },
  portamento: 0.05,
})
  .connect(reverb)
  .toDestination();

export default synth;
