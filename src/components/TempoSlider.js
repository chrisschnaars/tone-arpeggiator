import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;

const thumbStyles = `
  background: var(--color-button-active);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  height: 2rem;
  width: 2rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const Slider = styled.input`
  -webkit-appearance: none;
  background: var(--color-bg-muted);
  border-radius: 0.5rem;
  height: 0.5rem;
  outline: none;
  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }
`;

const TempoSlider = ({ handleChange }) => {
  return (
    <Wrapper>
      <label htmlFor="volume">Tempo</label>
      <Slider
        onChange={handleChange}
        type="range"
        id="tempo"
        name="tempo"
        min="100"
        defaultValue={160}
        max="400"
        step="1"
      />
    </Wrapper>
  );
};

export default TempoSlider;
