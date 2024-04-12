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
  padding: 10px 40px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const DescriptionBox = styled.div`
  outline: 1px solid red;
  margin-top: 20px;
`;

const DescriptionText = styled.p`
  font-size: 12px;
`;

export const AS = {
  // About
  About,
  AboutText,

  // Description
  Description,
  Button,
  DescriptionBox,
  DescriptionText,
};
