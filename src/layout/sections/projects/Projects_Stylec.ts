import styled from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../components/styles/Common";

// Projects
const Projects = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
    }
  }
`;

// Project
const Project = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.primary};
  max-width: 550px;
  width: 100%;
  padding: 20px;
  padding-bottom: 40px;
  border: 1px solid ${theme.color.projectBorder};
  border-radius: 50px 0;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: fill;
  background-color: aquamarine;
  border-radius: 24px 8px 8px 8px;
`;

const Title = styled.h4`
  /* font-size: 30px;
  font-weight: 600; */
  text-align: center;
  position: relative;
  ${font({
    weight: 600,
    Fmax: 30,
    Fmin: 24,
  })}

  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 60%;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    background-image: ${theme.color.gradientFon};
  }
`;

const Description = styled.p`
  ${font({
    Fmax: 18,
    Fmin: 14,
    color: `${theme.color.text}`,
  })}
  margin: 35px 0 40px;
`;

const LinkBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 30px;
`;

export const PS = {
  // Projects
  Projects,

  //   Project
  Project,
  ImageWrapper,
  Image,
  Title,
  Description,
  LinkBox,
};
