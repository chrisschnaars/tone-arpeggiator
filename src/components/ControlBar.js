import React from "react";
import styled from "styled-components";
import Button from "./Button";
import KeyToggle from "./KeyToggle";
import TempoSlider from "./TempoSlider";
import { ReactComponent as PauseIcon } from "../assets/icons/pause.svg";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--space-default);
`;

const ButtonsGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const ControlBar = ({
  activeKey,
  keyOptions,
  handleKeyChange,
  handlePlayClick,
  handleResetClick,
  handleTempoChange,
  playState,
}) => {
  const isPlaying = playState === "started";
  return (
    <Wrapper>
      <Button
        label={isPlaying ? "Pause" : "Play"}
        handleClick={handlePlayClick}
        icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
      />
      <ButtonsGroup>
        <TempoSlider handleChange={handleTempoChange} />
        <KeyToggle
          activeKey={activeKey}
          keyOptions={keyOptions}
          handleClick={handleKeyChange}
        />
        <Button label="Reset" handleClick={handleResetClick} />
      </ButtonsGroup>
    </Wrapper>
  );
};

export default ControlBar;
