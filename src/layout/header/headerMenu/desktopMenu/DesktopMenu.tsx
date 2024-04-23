import React from "react";
import { HMS } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const DesktopMenu: React.FC = () => {
  return (
    <HMS.DesktopMenu>
      <Menu />
    </HMS.DesktopMenu>
  );
};
