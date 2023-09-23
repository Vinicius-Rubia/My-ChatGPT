import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as C from "./styles";
import transition from "../../utils/transition";

const menu = [
  {
    url: "/welcome",
    title: "Início",
  },
  {
    url: "/context",
    title: "Contexto",
  },
  {
    url: "/functions",
    title: "Funções",
  },
  {
    url: "/reports",
    title: "Relatórios",
  },
];

const lastItem = menu.length - 1;

const Menu: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <C.Trigger aria-label="Menu Options">
          <IoMenuSharp className="text-3xl" />
        </C.Trigger>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <C.MenuContent>
          {menu.map((menuItem, index) => (
            <Link to={menuItem.url} key={index}>
              <C.MenuItem className={`${index === lastItem && "border-none"}`}>
                {menuItem.title}
              </C.MenuItem>
            </Link>
          ))}
        </C.MenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default transition(Menu);