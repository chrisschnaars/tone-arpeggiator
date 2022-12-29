import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--space-default);
`;

const Header = () => {
  return (
    <StyledHeader>
      Arpeggiator
      <span>source</span>
    </StyledHeader>
  );
};

export default Header;
