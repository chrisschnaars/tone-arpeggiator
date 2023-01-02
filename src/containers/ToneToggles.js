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
  activeBeat,
  activeNotes,
  handleToggleClick,
  numberOfNotes,
}) => {
  const toggles = [];
  for (let i = 0; i < activeNotes.length; i++) {
    toggles.push(
      <Toggle
        key={i}
        toggleId={i}
        activeNotes={activeNotes[i]}
        handleClick={handleToggleClick}
        isActiveBeat={activeBeat === i}
        numberOfNotes={numberOfNotes}
      />
    );
  }

  return <Wrapper>{toggles}</Wrapper>;
};

export default ToneToggles;
