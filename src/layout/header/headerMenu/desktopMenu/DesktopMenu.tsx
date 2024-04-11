import React from "react";
import { HMS } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

type DesktopMenuPropsType = {
  //   menuItems: String[];
  menuItems: Array<string>;
};

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (
  props: DesktopMenuPropsType
) => {
  return (
    <HMS.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </HMS.DesktopMenu>
  );
};
