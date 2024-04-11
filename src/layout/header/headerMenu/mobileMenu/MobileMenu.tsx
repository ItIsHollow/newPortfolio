import React from "react";
import { Menu } from "../menu/Menu";
import { HMS } from "../HeaderMenu_Styles";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  return (
    <HMS.MobileMenu>
      <HMS.BurgerButton isOpen={false}>
        <span></span>
      </HMS.BurgerButton>

      <HMS.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </HMS.MobileMenuPopup>
    </HMS.MobileMenu>
  );
};
