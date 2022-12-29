import React from "react";
import styled from "styled-components";

const ACTIVE_SIZE = "48px";
const PLAYING_SIZE = "64px";

const Wrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  flex: 1;

  &:hover {
    > div {
      width: ${ACTIVE_SIZE};
      height: ${ACTIVE_SIZE};
    }
  }
`;

const COLORS = [
  "#EF476F",
  "#F36A6D",
  "#F36A6D",
  "#F78C6B",
  "#FBAF69",
  "#FBAF69",
  "#FFD166",
  "#83D483",
  "#06D6A0",
  "#06D6A0",
  "#1CABB0",
  "#1CABB0",
  "#317FBF",
  "#6171AB",
  "#906397",
  "#C05583",
];

const MarkerButton = styled.div`
  background-color: var(--color-marker-default);
  border-radius: 64px;
  width: 16px;
  height: 16px;
  transition: all ease-out 400ms;

  &.active {
    width: ${ACTIVE_SIZE};
    height: ${ACTIVE_SIZE};
  }

  &.playing {
    transform: scale(1.75);
  }
`;

const Note = ({ toggleId, noteId, isActive, isPlaying, handleNoteClick }) => {
  const activeClass = isActive ? "active" : "";
  const playingClass = isActive && isPlaying ? "playing" : null;

  return (
    <Wrapper onClick={() => handleNoteClick(toggleId, noteId)}>
      <MarkerButton
        className={`${activeClass} ${playingClass}`}
        style={{ background: isActive ? COLORS[noteId] : undefined }}
      ></MarkerButton>
    </Wrapper>
  );
};

export default Note;
