import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

const TempoSlider = ({ handleChange }) => {
  return (
    <Wrapper>
      <label htmlFor="volume">Tempo</label>
      <input
        onChange={handleChange}
        type="range"
        id="tempo"
        name="tempo"
        min="100"
        defaultValue={120}
        max="320"
        step="1"
      />
    </Wrapper>
  );
};

export default TempoSlider;
