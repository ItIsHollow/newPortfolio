import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { SS } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const skillsData = [
  {
    title: "HTML",
    iconId: "code",
    width: "50px",
    height: "50px",
    viewbox: "0 0 50 50",
  },
  {
    title: "CSS",
    iconId: "css",
    width: "50px",
    height: "50px",
    viewbox: "0 0 50 50",
  },
  {
    title: "JS",
    iconId: "js",
    width: "50px",
    height: "50px",
    viewbox: "0 0 14 14",
  },
  {
    title: "typeScript",
    iconId: "typeScript",
    width: "50px",
    height: "50px",
    viewbox: "0 0 50 50",
  },
  {
    title: "react",
    iconId: "react",
    width: "50px",
    height: "50px",
    viewbox: "0 0 50 50",
  },
  {
    title: "styledComponent",
    iconId: "styledComponent",
    width: "50px",
    height: "50px",
    viewbox: "0 0 44 44",
  },

  {
    title: "tailwindcss",
    iconId: "tailwind",
    width: "50px",
    height: "50px",
    viewbox: "0 0 29 29",
  },
  {
    title: "bootstrap",
    iconId: "bootstrap",
    width: "50px",
    height: "50px",
    viewbox: "0 0 17 17",
  },
  {
    title: "figma",
    iconId: "figma",
    width: "50px",
    height: "50px",
    viewbox: "0 0 50 50",
  },
];

export const Skills: React.FC = () => {
  return (
    <SS.Skills id="skills">
      <Container>
        <SectionTitle>Навыки</SectionTitle>
        <FlexWrapper align="center" justify="center" gap="30px" wrap="wrap">
          <Fade cascade={true} damping={0.1} duration={700}>
            {skillsData.map((skill, index) => {
              return (
                <Skill
                  width={skill.width}
                  height={skill.height}
                  viewbox={skill.viewbox}
                  title={skill.title}
                  iconId={skill.iconId}
                  key={index}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </SS.Skills>
  );
};
