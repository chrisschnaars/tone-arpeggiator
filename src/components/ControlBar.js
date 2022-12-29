import React from "react";
import styled from "styled-components";
import Button from "./Button";
import KeyToggle from "./KeyToggle";
import TempoSlider from "./TempoSlider";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--space-default);
`;

const ButtonsGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5rem;
`;

const ControlBar = ({
  keyOptions,
  handleKeyClick,
  handlePlayClick,
  handleResetClick,
  handleTempoChange,
  isPlaying,
}) => {
  return (
    <Wrapper>
      <Button
        label={isPlaying ? "Pause" : "Play"}
        handleClick={handlePlayClick}
      />
      <ButtonsGroup>
        <TempoSlider handleChange={handleTempoChange} />
        <KeyToggle keyOptions={keyOptions} handleClick={handleKeyClick} />
        <Button label="Reset" handleClick={handleResetClick} />
      </ButtonsGroup>
    </Wrapper>
  );
};

export default ControlBar;
