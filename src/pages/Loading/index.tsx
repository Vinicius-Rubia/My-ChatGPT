import React, { useState, useEffect } from "react";
import { images } from "../../utils/images";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading <= 99) {
      setTimeout(() => {
        setLoading(loading + 1);
      }, 30);
    } else {
      setTimeout(() => {
        clearTimeout(0);
        navigate("welcome");
      }, 3000);
    }
  }, [loading]);

  return (
    <C.Container>
      <>
        <C.Loading>
          <C.Border>
            <div className="animate-spin">
              <C.Logo src={images.logo} alt="Logo" />
            </div>
          </C.Border>
        </C.Loading>
        {loading < 100 ? (
          <C.Text>Carregando... {loading}%</C.Text>
        ) : (
          <C.TextSuccess>Iniciando</C.TextSuccess>
        )}
      </>
    </C.Container>
  );
};

export default Loading;
