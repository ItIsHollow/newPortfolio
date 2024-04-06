import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

// html, css, js, bootstrap, react, ts, figma, styleComponent, tailwindcss, git

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper align="center" justify="center" gap="20px">
          <Skill descr="HTML" iconId="code" />
          <Skill descr="CSS" iconId="css" />
          <Skill descr="react" iconId="react" />
          <Skill descr="typeScript" iconId="typeScript" />
          <Skill descr="styledComponent" iconId="styledComponent" />
          <Skill descr="figma" iconId="figma" />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100px;
`;
