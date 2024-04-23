import React from "react";
import { HMS } from "../HeaderMenu_Styles";

const items = [
  { title: "Домой", href: "home" },
  { title: "Проекты", href: "projects" },
  { title: "Навыки", href: "skills" },
  { title: "Обо Мне", href: "about" },
  { title: "Контакты", href: "contacts" },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <HMS.MenuItem key={index}>
            <HMS.NavLink
              activeClass="active"
              to={item.href}
              smooth={true}
              spy={true}
              offset={-200}
            >
              {item.title}
            </HMS.NavLink>
          </HMS.MenuItem>
        );
      })}
    </ul>
  );
};
