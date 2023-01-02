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
  activeNotes,
  toggleId,
  handleClick,
  numberOfNotes,
  isActiveBeat,
}) => {
  // Create array note note components
  const notes = [];

  for (let i = 0; i < numberOfNotes; i++) {
    const noteIsActive = activeNotes.includes(i);
    notes.push(
      <Note
        key={i}
        toggleId={toggleId}
        noteId={i}
        isActive={noteIsActive}
        isPlaying={isActiveBeat}
        handleNoteClick={handleClick}
      />
    );
  }

  return <Wrapper>{notes}</Wrapper>;
};

export default Toggle;
