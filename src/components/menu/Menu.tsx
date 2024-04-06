import React from "react";
import styled from "styled-components";

type MenuPropsType = {
  menuItems: Array<string>;
  fontSize?: string;
  gap?: string;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu fontSize={props.fontSize}>
      <StyledList gap={props.gap}>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </StyledList>
    </StyledMenu>
  );
};

type StyledMenuPropsType = {
  fontSize?: string;
  gap?: string;
};

const StyledMenu = styled.nav<StyledMenuPropsType>`
  a {
    font-size: ${(props) => props.fontSize || "12px"};
  }
`;

type StyledListPropsType = {
  gap?: string;
};

const StyledList = styled.ul<StyledListPropsType>`
  display: flex;
  gap: ${(props) => props.gap || "10px"};
  list-style: none;
`;
