import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const SelectorButton = styled(Button)`
  border-radius: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  &.active {
    background-color: var(--color-bg-toggle);
  }

  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

const KeyToggle = ({ activeKey, keyOptions, handleClick }) => {
  return (
    <Wrapper>
      <legend>Key</legend>
      <ButtonGroup>
        {keyOptions.map((item, index) => (
          <SelectorButton
            key={`key-option-${index}`}
            label={item.note}
            data-key={index}
            handleClick={handleClick}
            className={`${activeKey === index ? "active" : ""}`}
          />
        ))}
      </ButtonGroup>
    </Wrapper>
  );
};

export default KeyToggle;
