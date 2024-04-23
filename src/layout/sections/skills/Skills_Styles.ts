import styled from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { font } from "../../../components/styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";

// Skills
const Skills = styled.section`
  position: relative;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      gap: 22px;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 15px;
    }
  }
`;

// Skill
const Skill = styled.div`
  overflow: hidden;
  padding: 15px;
  /* min-width: 75px; */
  /* max-width: 120px; */
  /* width: 100%; */
  width: 120px;
  /* min-height: 75px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  /* background-image: ${theme.color.gradientFon}; */
  background-image: ${theme.color.gradientFon2};
  border-radius: 30px;

  @media ${theme.media.tablet} {
    width: 105px;
  }

  @media ${theme.media.mobile} {
    width: 90px;
  }
`;

const SkillTitle = styled.h6`
  text-transform: uppercase;
  ${font({ weight: 600, Fmax: 10, Fmin: 7 })}
`;

export const SS = {
  // Skills
  Skills,

  // Skill
  Skill,
  SkillTitle,
};
