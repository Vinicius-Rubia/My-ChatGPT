import tw from "tailwind-styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Trigger = tw.button`
  absolute
  top-3
  right-3
  outline-none
  bg-transparent
  rounded-full
  p-1
  focus:bg-[#383838]
`;

export const MenuContent = tw(DropdownMenu.Content)`
  absolute
  -right-3
  top-3
  rounded-md
  z-20
  overflow-hidden
  min-w-[270px]
  bg-[#222222]
  text-[#E5E5E5]
  border
  border-white/30
`;

export const MenuItem = tw(DropdownMenu.Item)`
  outline-none
  focus:bg-[#383838]
  cursor-pointer
  h-12
  pl-4
  flex
  items-center
  border-b
  border-white/30
`;
