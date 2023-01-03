import React from "react";
import styled from "styled-components";
import Note from "./Note";

const Wrapper = styled.div`
  align-items: stretch;
  border-radius: 100px;
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  flex: 1;
  transition: background-color 150ms;
`;

const Toggle = ({
  playingNoteId,
  noteSequence,
  toggleId,
  handleClick,
  numberOfNotes,
  noteCountStart,
}) => {
  // Create array note note components
  const notes = [];

  let noteCount = noteCountStart;

  for (let i = 0; i < numberOfNotes; i++) {
    const noteIsActive = noteSequence.includes(i);
    const noteIsPlaying = playingNoteId === noteCount;
    notes.push(
      <Note
        key={`${toggleId}-${i}`}
        noteId={i}
        noteNumber={noteIsActive ? noteCount : null}
        toggleId={toggleId}
        isActive={noteIsActive}
        isPlaying={noteIsPlaying}
        handleNoteClick={handleClick}
      />
    );

    noteCount = noteIsActive ? noteCount + 1 : noteCount;
  }

  return <Wrapper>{notes}</Wrapper>;
};

export default Toggle;
