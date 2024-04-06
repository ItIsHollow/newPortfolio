import React from "react";
import styled from "styled-components";
import { theme } from "./styles/Theme";

export const Link = styled.a.attrs(() => ({
  target: "_blank",
}))`
  color: pink;
  display: inline-block;
  /* background-color: green; */
  background-image: ${theme.color.gradientFon};
  width: 140px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50px;
`;
