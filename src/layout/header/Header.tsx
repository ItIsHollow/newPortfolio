import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { theme } from "../../components/styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const headerItems = ["Home/Up", "Skills", "Project", "About", "Social"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={headerItems} fontSize="20px" gap="50px" />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.color.primary};
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  ${FlexWrapper} {
  }
`;