import tw from "tailwind-styled-components";

interface ContainerProps {
  type: string;
}

export const Message = tw.p<ContainerProps>`
  flex
  items-center
  bg-gradient-to-b
  border
  border-[#464646]
  text-[#E5E5E5]
  py-2
  px-3
  rounded-b-md
  text-start
  text-sm
  max-w-[90%]
  sm:max-w-[60%]
  sm:text-base
  ${({ type }) => type === "IA" ? " bg-black/20 mr-auto rounded-tr-md rounded-tl-none" : "bg-[#383838] ml-auto rounded-tl-md rounded-tr-none"}
`;

export const Hour = tw.span<ContainerProps>`
  text-xs
  block
  text-white/50
  -mt-3
  ${({ type }) => type === "IA" ? " mr-auto ml-1" : "ml-auto mr-1"}
`;