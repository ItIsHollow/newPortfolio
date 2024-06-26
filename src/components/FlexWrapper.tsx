import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  gap: ${(props) => props.gap || "5px"};
`;
