import tw from "tailwind-styled-components";
import { VscGithub } from "react-icons/vsc";

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
  px-3
  pb-3
  pt-12
  overflow-auto
  h-[calc(100%-24px)]
  md:h-[calc(100%-72px)]
  flex
  flex-1
  z-10
`;

export const Content = tw.div`
  max-w-2xl
  m-auto
  flex
  flex-col
  justify-center
`;

export const Title = tw.h1`
  text-3xl
  font-semibold
  sm:text-5xl
`;

export const TitleDecoration = tw.span`
  text-3xl
  sm:text-5xl
  font-semibold
  block
  sm:inline
  w-fit
  mx-auto
  px-2
  border-l-[3px]
  border-[#86CF37]
  bg-gradient-to-r
  from-[#6bb95b]
  to-[#6ECC5C33]
  my-4
  animate-pulse
`;

export const SubTitle = tw.h2`
  text-sm
  px-4
  sm:mt-6
  sm:text-base
`;

export const InputInit = tw.form`
  rounded-[10px]
  h-14
  bg-[#252525]
  flex
  items-center
  gap-2
  pl-3
  pr-1.5
  py-1.5
  mt-10
  mb-16
  border
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

export const Comments = tw.div`
  flex
  items-center
  justify-center
  flex-wrap
  lg:flex-nowrap
  gap-12
  mb-20
`;

export const BoxComment = tw.div`
  text-center
  grid
  gap-1
  transition-all
  hover:scale-105
  group
`;

export const BoxTitle = tw.h3`
  mt-2
  font-medium
  text-white
`;

export const BoxDescription = tw.p`
  text-sm
  text-[#E5E5E5]
  font-light
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

export const IconGitHub = tw(VscGithub)`
  mx-auto
  text-2xl
  cursor-pointer
  hover:scale-125
  hover:rotate-[360deg]
  transition-all
  lg:absolute
  lg:bottom-3
  lg:right-3
`;