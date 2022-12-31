import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  background: var(--color-button);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  transition: all ease-out 150ms;

  &:hover {
    background: var(--color-button-hover);
  }

  &:focus {
    z-index: 1;
  }
`;

const Button = ({ label, icon, handleClick, ...rest }) => {
  return (
    <StyledButton onClick={handleClick} {...rest}>
      {icon && icon}
      {label}
    </StyledButton>
  );
};

export default Button;
