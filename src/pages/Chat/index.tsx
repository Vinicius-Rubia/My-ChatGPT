import React from 'react'
import transition from '../../utils/transition';
import { IoMdSend } from 'react-icons/io';
import { images } from '../../utils/images';
import { Header, WindowChat } from '../../components';
import * as C from "./styles";

const Chat: React.FC = () => {
  return (
    <C.Container>
      <C.RoundedBlur />
      <C.Layout>
        <C.Content>
          <Header />

          <WindowChat />
          
          <C.InputInit>
            <C.Input
              type="text"
              placeholder='Exemplo: "Me diga quem é você!"'
            />
            <C.Send>
              <IoMdSend className="text-white" />
            </C.Send>
          </C.InputInit>
        </C.Content>
      </C.Layout>

      <C.WaveOne src={images.waveOne} />
      <C.WaveTwo src={images.waveTwo} />
    </C.Container>
  )
}

export default transition(Chat);
