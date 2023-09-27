import tw from "tailwind-styled-components";
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const Overlay = tw(AlertDialog.Overlay)`
  bg-black/50
  fixed
  inset-0
  z-10
`;

export const Content = tw(AlertDialog.Content)`
  bg-[#252525]
  border
  border-[#464646]
  rounded-md
  fixed
  top-[50%]
  left-[50%]
  -translate-x-[50%]
  -translate-y-[50%]
  p-6
  w-[90vw]
  max-w-[700px]
  z-10
  outline-none
  text-white
`;

export const ButtonsActions = tw.div`
  flex
  justify-end
  gap-6
`;

export const Title = tw(AlertDialog.Title)`
  text-2xl
  flex
  items-center
  gap-3
`;

export const Description = tw(AlertDialog.Description)`
  my-5
`;

export const ButtonAccept = tw.button`
  bg-gradient-to-r
  from-[#6bce5e80]
  to-[#2370137c]
  hover:from-[#6CCE5EB2]
  hover:to-[#227013B2]
  h-12
  px-10
  rounded-[10px]
  uppercase
  text-center
  font-semibold
`;