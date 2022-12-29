import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  background: var(--color-bg-muted);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  transition: all ease-out 150ms;

  &:hover {
    background: red;
  }

  &:focus {
    z-index: 1;
  }
`;

const Button = ({ label, handleClick, ...rest }) => {
  return (
    <StyledButton onClick={handleClick} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
