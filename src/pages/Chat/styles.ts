import tw from "tailwind-styled-components";

export const Container = tw.section`
  bg-black
  h-screen
  relative
  overflow-hidden
`;

export const RoundedBlur = tw.span`
  absolute
  w-full
  h-[250px]
  blur-[20px]
  right-0
  left-0
  rounded-b-full
  -top-10
  sm:w-[534px]
  sm:h-[534px]
  bg-gradient-to-tr
  from-red-600
  to-amber-500
  sm:rounded-full
  sm:blur-[50px]
  sm:-right-44
  sm:-top-44
  sm:left-auto
`;

export const Layout = tw.div`
  relative
  text-[#E5E5E5]
  m-3
  md:m-9
  bg-white/10
  rounded-2xl
  border
  border-white/10
  backdrop-blur-[30px]
  text-center
  pb-3
  overflow-auto
  h-[calc(100%-24px)]
  md:h-[calc(100%-72px)]
  flex
  flex-1
  z-10
`;

export const Content = tw.div`
  w-full
  flex
  flex-col
`;

export const InputInit = tw.form`
  h-14
  bg-[#252525]
  flex
  items-center
  gap-2
  pl-3
  pr-1.5
  py-1.5
  mt-3.5
  border
  md:mt-10
  md:mb-8
  md:mx-3
  md:rounded-lg
  border-white/10
`;

export const Input = tw.input`
  w-full
  h-full
  bg-transparent
  outline-none
  text-white/30
  placeholder:text-white/30
  text-ellipsis overflow-hidden
  focus:border-[#6CCE5EB2]
`;

export const Send = tw.button`
  bg-gradient-to-r
  from-[#6bce5e80]
  to-[#2370137c]
  px-3
  my-1.5
  h-full
  grid
  place-items-center
  rounded-xl
  hover:from-[#6CCE5EB2]
  hover:to-[#227013B2]
`;

export const WaveOne = tw.img`
  absolute
  bottom-0
  left-0
  right-0
  z-[5]
`;

export const WaveTwo = tw.img`
  absolute
  bottom-0
  left-0
  right-0
`;