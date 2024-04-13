import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { Cloud } from "../Cloud";
import { LogoSvg } from "../LogoSvg";

type LogoPropsType = {
  color?: string;
};

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
  return (
    <Link href="#" color={props.color}>
      {/* <Icon iconId="quote" /> */}
      {/* <Icon iconId="cloud" width="50px" height="50px" viewBox="0 0 25 25" /> */}
      {/* <Cloud
        width="50px"
        height="50px"
        viewBox="0 0 25 25"
        color={theme.color.font}
      /> */}
      <LogoSvg />
    </Link>
  );
};

type LinkPropsType = {
  color?: string;
};
const Link = styled.a<LinkPropsType>`
  color: ${(props) => props.color || theme.color.font};
`;
