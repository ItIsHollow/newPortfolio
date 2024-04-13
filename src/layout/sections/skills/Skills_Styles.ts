import styled from "styled-components";
import { theme } from "../../../components/styles/Theme";

// Skills
const Skills = styled.section``;

// Skill
const Skill = styled.div`
  overflow: hidden;
  padding: 15px;
  min-width: 75px;
  max-width: 120px;
  width: 100%;
  min-height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  /* background-image: ${theme.color.gradientFon}; */
  background-image: ${theme.color.gradientFon2};
  border-radius: 30px;
`;

const SkillTitle = styled.h6`
  text-transform: uppercase;
`;

export const SS = {
  // Skills
  Skills,

  // Skill
  Skill,
  SkillTitle,
};
