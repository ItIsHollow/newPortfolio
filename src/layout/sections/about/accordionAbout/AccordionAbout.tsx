import React from "react";
import styled from "styled-components";
import { theme } from "../../../../components/styles/Theme";

export const AccordionAbout = () => {
  return (
    <StyledAccordionAbout>
      <Button>If you want some information Click</Button>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        nam provident reiciendis quasi autem id nisi aut ipsam rerum mollitia
        aliquid aspernatur ad accusamus, beatae odit magni quibusdam, soluta
        voluptate.
      </Description>
    </StyledAccordionAbout>
  );
};

const StyledAccordionAbout = styled.div``;

const Button = styled.button`
  background-image: ${theme.color.gradientFon};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Description = styled.p`
  width: 70%;
  margin-top: 20px;
  font-size: 12px;
`;
