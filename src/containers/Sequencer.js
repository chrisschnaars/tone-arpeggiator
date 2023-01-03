import React, { useState, useEffect, useRef } from "react";
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

const synth = new Tone.Synth().toDestination();

// Keep a count of total active notes
let totalActiveNotes = NUMBER_OF_BEATS;

const Sequencer = () => {
  const [playState, setPlayState] = useState(Tone.Transport.state); // started or stopped
  const [noteSequence, setNoteSequence] = useState(
    randomIntervalArray(NUMBER_OF_BEATS)
  );
  const [activeNote, setActiveNote] = useState(0);
  const [activeKey, setActiveKey] = useState(0);

  const checkContext = () => {
    if (Tone.context.state === "suspended") {
      Tone.context.resume();
    }
  };

  // Update active notes each time a note is clicked
  const updateActiveNote = (toggleId, clickedId) => {
    checkContext();

    // Make copy of active note arrays
    let newArr = [...noteSequence];

    // Check if note array for beat/toggle already includes clicked item
    if (newArr[toggleId].includes(clickedId)) {
      const id = newArr[toggleId].indexOf(clickedId);
      newArr[toggleId].splice(id, 1);

      totalActiveNotes -= 1;
    } else {
      newArr[toggleId].push(clickedId);
      totalActiveNotes += 1;
      setActiveNote(activeNote + 1);
    }

    setNoteSequence(newArr);
  };

  // Toggle play/pause mode
  const togglePlaying = () => {
    checkContext();
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  };

  // Update the key of the arpeggiator notes
  const updateKey = (e) => {
    const updatedKey = parseInt(e.target.getAttribute("data-key"));

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
    setNoteSequence(arr);
  };

  // Create counter to update inside useEffect
  const count = useRef(0);

  // This will run one time after the component mounts
  useEffect(
    () => {
      const pattern = new Tone.Sequence(
        (time, index) => {
          const f = FREQUENCIES[activeKey].frequency;
          const note = INTERVALS[index] * f;
          synth.triggerAttackRelease(note, "16t", time);

          Tone.Draw.schedule(() => {
            count.current =
              count.current >= totalActiveNotes - 1 ? 0 : count.current + 1;
            setActiveNote(count.current);
          });

          console.log(pattern.playbackRate);
        },
        [noteSequence],
        "4n"
      ).start(0);

      return () => pattern.dispose();
    },
    [noteSequence, activeKey] // Retrigger when pattern changes
  );

  useEffect(() => {
    Tone.Transport.bpm.value = 20;
  }, []);

  return (
    <Wrapper>
      <ToneToggles
        playingNoteId={activeNote}
        noteSequence={noteSequence}
        handleToggleClick={updateActiveNote}
        numberOfNotes={INTERVALS.length}
      />
      <ControlBar
        activeKey={activeKey}
        keyOptions={FREQUENCIES}
        handleKeyChange={updateKey}
        handlePlayClick={togglePlaying}
        handleResetClick={randomizeNotes}
        handleTempoChange={updateTempo}
        playState={playState}
      />
    </Wrapper>
  );
};

export default Sequencer;
