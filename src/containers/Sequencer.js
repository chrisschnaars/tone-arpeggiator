import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import styled from "styled-components";
import ControlBar from "../components/ControlBar";
import ToneToggles from "./ToneToggles";
import {
  INTERVALS,
  FREQUENCIES,
  NUMBER_OF_BEATS,
  randomIntervalArray,
} from "../audio/config";

const Wrapper = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

// active notes, playing state, s
const Sequencer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNotes, setActiveNotes] = useState(
    randomIntervalArray(NUMBER_OF_BEATS)
  );
  const [activeBeat, setActiveBeat] = useState(null);
  const [activeKey, setActiveKey] = useState(0);

  // Update active notes each time a note is clicked
  const updateActiveNote = (toggleId, clickedId) => {
    const updatedNote = activeNotes[toggleId] === clickedId ? null : clickedId;

    let newArr = [...activeNotes];
    newArr[toggleId] = updatedNote;
    setActiveNotes(newArr);
  };

  // Toggle play/pause mode
  const togglePlaying = () => {
    Tone.Transport.toggle();
    setIsPlaying(!isPlaying);
  };

  // Update the key of the arpeggiator notes
  const updateKey = (e) => {
    const updatedKey = e.target.getAttribute("data-key");

    if (updatedKey !== null) {
      setActiveKey(updatedKey);
    }
  };

  // Change the tempo
  const updateTempo = (e) => {
    const newTempo = e.target.value;
    Tone.Transport.bpm.value = newTempo;
  };

  // Randomize the active note in each beat
  const randomizeNotes = () => {
    const arr = randomIntervalArray(NUMBER_OF_BEATS);
    setActiveNotes(arr);
  };

  // This will run one time after the component mounts
  useEffect(
    () => {
      const synth = new Tone.Synth().toDestination();

      let pattern = new Tone.Sequence(
        (time, index) => {
          if (activeNotes[index] !== null) {
            const intervalIndex = activeNotes[index];
            const f = FREQUENCIES[activeKey].frequency;
            const note = INTERVALS[intervalIndex] * f;
            synth.triggerAttackRelease(note, "8n", time);
            setActiveBeat(index);
          }
        },
        Array.from(activeNotes.keys()),
        "4n"
      );

      pattern.start(0);
      return () => pattern.dispose();
    },
    [activeNotes, activeKey] // Retrigger when pattern changes
  );

  return (
    <Wrapper>
      <ToneToggles
        activeBeat={activeBeat}
        activeNotes={activeNotes}
        handleToggleClick={updateActiveNote}
        numberOfNotes={INTERVALS.length}
      />
      <ControlBar
        keyOptions={FREQUENCIES}
        handleKeyClick={updateKey}
        handlePlayClick={togglePlaying}
        handleResetClick={randomizeNotes}
        handleTempoChange={updateTempo}
        isPlaying={isPlaying}
      />
    </Wrapper>
  );
};

export default Sequencer;
