import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { font } from "../../../components/styles/Common";
import { theme } from "../../../components/styles/Theme";

// About
const About = styled.section`
  min-height: 100px;
  /* padding-bottom: 100px; */

  ${SectionTitle} {
    margin-bottom: 10px;
  }

  transition: height 0.5s ease-in-out;
`;

const AboutText = styled.p`
  width: 70%;
  margin-bottom: 20px;
  ${font({
    weight: 300,
    Fmax: 16,
    Fmin: 12,
  })}
`;

// Description
const Description = styled.div``;

const Button = styled.button`
  background-image: ${theme.color.gradientFon};
  border: none;
  border-radius: 20px;
  padding: 15px 60px;
  cursor: pointer;
  /* margin-bottom: 10px; */
  position: relative;

  opacity: 0.8;
  transform: translateY(0);
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.color.hoverFont};
    transform: translateY(-10%);
    opacity: 1;
  }
`;

const DescriptionBox = styled.div`
  /* outline: 1px solid red; */
  margin-top: 40px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const DescriptionTopBox = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-around;
`;

const DescriptionBottomBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
`;

const PhotoWrapper = styled.div`
  /* max-width: 300px;
  width: 100%; */
  flex-basis: 25%;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    border-radius: 50px 15px 50px 15px;
    background-image: ${theme.color.gradientBorder};

    position: absolute;
    top: -3px;
    right: -3px;
    bottom: 0;
    left: -3px;
    z-index: -1;
  }

  @media ${theme.media.tablet} {
    flex-basis: 40%;
  }

  @media ${theme.media.mobile} {
    flex-basis: 45%;
  }
`;

const Photo = styled.img`
  border-radius: 50px 15px 50px 15px;
  /* max-width: 350px; */
  width: 100%;
  /* width: 350px; */
  /* min-height: 400px; */
  object-fit: cover;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 55%;

  @media ${theme.media.tablet} {
    flex-basis: 50%;
  }
`;

const DescriptionText = styled.p`
  ${font({ Fmax: 16, Fmin: 10, lineHeight: "1.5" })}
`;

export const AS = {
  // About
  About,
  AboutText,

  // Description
  Description,
  Button,
  DescriptionBox,
  DescriptionTopBox,
  DescriptionBottomBox,
  PhotoWrapper,
  Photo,
  TextBox,
  DescriptionText,
};
