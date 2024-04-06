import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { AccordionAbout } from "./accordionAbout/AccordionAbout";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About</SectionTitle>
        <AccordionAbout />
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 100px;
`;
