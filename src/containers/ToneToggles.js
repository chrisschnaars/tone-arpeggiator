import React from "react";
import styled from "styled-components";
import Toggle from "../components/Toggle";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  justify-content: space-between;
  padding: var(--space-default);
`;

const ToneToggles = ({
  activeNotes,
  handleToggleClick,
  numberOfNotes,
  activeBeat,
}) => {
  const toggles = [];
  for (let i = 0; i < activeNotes.length; i++) {
    toggles.push(
      <Toggle
        key={i}
        id={i}
        activeNote={activeNotes[i]}
        handleClick={handleToggleClick}
        isActiveBeat={activeBeat === i}
        numberOfNotes={numberOfNotes}
      />
    );
  }

  return <Wrapper>{toggles}</Wrapper>;
};

export default ToneToggles;
