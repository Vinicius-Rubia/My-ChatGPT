import React from "react";
import transition from "../../utils/transition";
import { IoMdSend, IoIosTrendingUp } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { images } from "../../utils/images";
import * as C from "./styles";
import Menu from "../../components/Menu";

const Welcome: React.FC = () => {
  return (
    <C.Container>
      <C.RoundedBlur />
      <C.Layout id="layout">
        <C.Content>
          {Menu}
          <C.Title>
            Bem vindo ao <C.TitleDecoration>ChatGPT</C.TitleDecoration>
          </C.Title>
          <C.SubTitle>O poder da IA é além de seus conhecimentos...</C.SubTitle>

          <C.InputInit>
            <C.Input
              type="text"
              placeholder='Exemplo: "Me diga quem é você!"'
            />
            <C.Send>
              <IoMdSend className="text-white" />
            </C.Send>
          </C.InputInit>

          <C.Comments>
            <C.BoxComment>
              <BsStars className="mx-auto group-hover:scale-150 transition-all" />
              <C.BoxTitle>Limpo e preciso</C.BoxTitle>
              <C.BoxDescription>Pariatur sint laborum cillum aute consectetur irure.</C.BoxDescription>
            </C.BoxComment>
            <C.BoxComment>
              <BiTargetLock className="mx-auto group-hover:scale-150 transition-all" />
              <C.BoxTitle>Respostas assertivas</C.BoxTitle>
              <C.BoxDescription>Pariatur sint laborum cillum aute consectetur irure.</C.BoxDescription>
            </C.BoxComment>
            <C.BoxComment>
              <IoIosTrendingUp className="mx-auto group-hover:scale-150 transition-all" />
              <C.BoxTitle>Eficiência</C.BoxTitle>
              <C.BoxDescription>Pariatur sint laborum cillum aute consectetur irure.</C.BoxDescription>
            </C.BoxComment>
          </C.Comments>

          <a href="https://github.com/Vinicius-Rubia" target="_blank">
            <C.IconGitHub />
          </a>
        </C.Content>
      </C.Layout>

      <C.WaveOne src={images.waveOne} />
      <C.WaveTwo src={images.waveTwo} />
    </C.Container>
  );
};

export default transition(Welcome);
