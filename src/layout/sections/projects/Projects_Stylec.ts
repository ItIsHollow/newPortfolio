import styled from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../components/styles/Common";

// Projects
const Projects = styled.section`
  position: relative;
  ${FlexWrapper} {
    row-gap: 30px;

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
  gap: 5px;
  background-color: ${theme.color.primary};
  max-width: 550px;
  /* min-width: 351px; */
  flex-basis: 48%;
  width: 100%;
  /* height: 100%; */
  padding: 25px;
  padding-bottom: 40px;
  border: 1px solid ${theme.color.projectBorder};
  border-radius: 50px 0;

  @media ${theme.media.tablet} {
    flex-basis: 100%;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;
type ImagePropsType = {
  border?: string;
};
const Image = styled.img<ImagePropsType>`
  width: 100%;
  /* height: 300px; */
  object-fit: fill;
  background-color: aquamarine;
  border-radius: 24px 8px 8px 8px;
  border: ${(props) => props.border || "none"};
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
  margin: 35px 0;
`;

const LinkBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 30px;
  @media ${theme.media.tablet} {
    gap: 20px;
  }
`;

export const Link = styled.a.attrs(() => ({
  target: "_blank",
}))`
  display: inline-block;
  /* background-color: green; */
  background-image: ${theme.color.gradientFon};
  padding: 15px 10px;
  min-width: 130px;
  /* max-width: 140px; */
  /* height: 40px; */
  text-align: center;
  /* line-height: 40px; */
  border-radius: 50px;

  opacity: 0.8;
  transform: translateY(0);
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-10%);
    color: ${theme.color.hoverFont};
  }

  @media ${theme.media.mobile} {
    min-width: 120px;
    font-size: 12px;
  }
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
  Link,
};
