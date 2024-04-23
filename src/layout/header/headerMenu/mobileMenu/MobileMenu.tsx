import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { HMS } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClickHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <HMS.MobileMenu>
      <HMS.BurgerButton onClick={onBurgerBtnClickHandler} isOpen={menuIsOpen}>
        <span></span>
      </HMS.BurgerButton>

      <HMS.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu />
      </HMS.MobileMenuPopup>
    </HMS.MobileMenu>
  );
};
