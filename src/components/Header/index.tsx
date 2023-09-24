import React from "react";
import { images } from "../../utils/images";
import Menu from "../Menu";
import * as C from "./styles";

export const Header: React.FC = () => {
  return (
    <C.Header>
      <C.Head>
        <C.ImgLogo src={images.logo} alt="Logo" />
        <C.StatusChat>
          <C.TitleChat>CHATGPT</C.TitleChat>
          <C.Status>Digitando...</C.Status>
        </C.StatusChat>
      </C.Head>
      <div className="absolute right-3 top-5">
        {Menu}
      </div>
    </C.Header>
  );
};
