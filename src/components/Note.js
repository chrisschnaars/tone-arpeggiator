import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  flex: 1;

  &:hover {
    cursor: pointer;
    > div {
      &:not(.active) {
        transform: scale(2.5);
        transition: transform ease-out 300ms;
      }
    }
  }
`;

const COLORS = [
  "#FE6233",
  "#FE7A33",
  "#FECF33",
  "#FEF033",
  "#52DF7C",
  "#33FECF",
  "#33C8FE",
  "#3362FE",
  "#6933FE",
  "#CF33FE",
  "#FE33C8",
  "#FE3362",
  "#FE3333",
];

const MarkerButton = styled.div`
  background-color: var(--color-marker-default);
  border-radius: 64px;
  width: 16px;
  height: 16px;
  transition: all ease-out 300ms;

  &.active {
    width: 48px;
    height: 48px;
  }

  &.playing {
    transform: scale(1.75);
  }
`;

const Note = ({
  toggleId,
  noteId,
  noteNumber,
  isActive,
  isPlaying,
  handleNoteClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const activeClass = isActive ? "active" : "";
  const playingClass = isActive && isPlaying ? "playing" : null;

  const styles = {
    background:
      isHover || isActive ? `${COLORS[noteId]}` : "var(--color-marker-default)",
  };

  return (
    <Wrapper
      onClick={() => handleNoteClick(toggleId, noteId)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MarkerButton
        className={`${activeClass} ${playingClass}`}
        style={styles}
      ></MarkerButton>
    </Wrapper>
  );
};

export default Note;
