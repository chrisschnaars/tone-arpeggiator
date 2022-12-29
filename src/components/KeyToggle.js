import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
`;

const KeyToggle = ({ activeKey, keyOptions, handleChange }) => {
  return (
    <Wrapper>
      {keyOptions.map((item, index) => (
        <div key={`frequency=${item.note}`}>
          <input
            type="radio"
            id={item.note}
            value={index}
            onChange={handleChange}
            checked={index === activeKey}
          />
          <label htmlFor={item.note}>{item.note}</label>
        </div>
      ))}
    </Wrapper>
  );
};

export default KeyToggle;
