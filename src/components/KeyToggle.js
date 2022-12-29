import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
`;

const KeyToggle = ({ keyOptions, handleClick }) => {
  return (
    <Wrapper>
      {keyOptions.map((item, index) => (
        <Button
          key={`key-option-${index}`}
          label={item.note}
          data-key={index}
          handleClick={handleClick}
        />
      ))}
    </Wrapper>
  );
};

export default KeyToggle;
