import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { LogoSvg } from "../LogoSvg";
import { animateScroll as scroll } from "react-scroll";

type LogoPropsType = {
  color?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
  return (
    <Link
      onClick={() => {
        scroll.scrollToTop();
      }}
      href="#"
      color={props.color}
    >
      <LogoSvg
        color={props.color}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
    </Link>
  );
};

type LinkPropsType = {
  color?: string;
};
const Link = styled.a<LinkPropsType>`
  color: ${(props) => props.color || theme.color.font};
`;
