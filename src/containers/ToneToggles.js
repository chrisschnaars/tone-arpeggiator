import React from "react";
import styled from "styled-components";
import Toggle from "../components/Toggle";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.25rem var(--space-default);
`;

const ToneToggles = ({
  playingNoteId,
  noteSequence,
  handleToggleClick,
  numberOfNotes,
}) => {
  const toggles = [];

  for (let i = 0; i < noteSequence.length; i++) {
    let noteCountStart = 0;
    for (let j = 0; j < i; j++) {
      noteCountStart += noteSequence[j].length;
    }
    toggles.push(
      <Toggle
        key={i}
        toggleId={i}
        playingNoteId={playingNoteId}
        noteSequence={noteSequence[i]}
        handleClick={handleToggleClick}
        numberOfNotes={numberOfNotes}
        noteCountStart={noteCountStart}
      />
    );
  }

  return <Wrapper>{toggles}</Wrapper>;
};

export default ToneToggles;
