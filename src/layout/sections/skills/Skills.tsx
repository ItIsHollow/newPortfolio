import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { SS } from "./Skills_Styles";

// html, css, js, bootstrap, react, ts, figma, styleComponent, tailwindcss, git

const skillsData = [
  { title: "HTML", iconId: "code" },
  { title: "CSS", iconId: "css" },
  { title: "react", iconId: "react" },
  { title: "typeScript", iconId: "typeScript" },
  { title: "styledComponent", iconId: "styledComponent" },
  { title: "figma", iconId: "figma" },
];

export const Skills: React.FC = () => {
  return (
    <SS.Skills>
      <Container>
        <SectionTitle>Навыки</SectionTitle>
        <FlexWrapper align="center" justify="center" gap="20px">
          {skillsData.map((skill, index) => {
            return (
              <Skill title={skill.title} iconId={skill.iconId} key={index} />
            );
          })}
        </FlexWrapper>
      </Container>
    </SS.Skills>
  );
};
