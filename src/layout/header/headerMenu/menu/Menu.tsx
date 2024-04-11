import React from "react";
import { HMS } from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>;
  // menuItems: String[]
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <HMS.MenuItem key={index}>
            <HMS.Link href="">{item}</HMS.Link>
          </HMS.MenuItem>
        );
      })}
    </ul>
  );
};
