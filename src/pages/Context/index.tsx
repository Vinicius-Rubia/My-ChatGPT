import React, { useState, ChangeEvent } from "react";
import transition from "../../utils/transition";
import { images } from "../../utils/images";
import * as C from "./styles";
import Menu from "../../components/Menu";

const Context: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile && selectedFile.type === "text/html") {
      setFileName(selectedFile.name);
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const fileText = e.target.result as string;
          setFileContent(fileText);
        }
      };
      reader.readAsText(selectedFile);
      alert("Arquivo carregado!");
    } else {
      alert("Ops... Esse não é um arquivo do tipo html!");
    }
  };

  return (
    <C.Container>
      <C.RoundedBlur />
      <C.Layout id="layout">
        <C.Content>
          {Menu}
          <C.Title>
            Escolha um arquivo para o{" "}
            <C.TitleDecoration>Contexto</C.TitleDecoration>
          </C.Title>

          <C.Context>
            <C.EditContext>
              <C.Upload>
                <C.IconUpload />
                <p>
                  <strong>{fileName ? fileName : "Procurar arquivo"}</strong>
                </p>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </C.Upload>

              <C.ViewText
                defaultValue={fileContent}
                placeholder="Carregue um arquivo para visualizar aqui o conteúdo..."
              />

              <C.BtnSaveContext>Salvar contexto</C.BtnSaveContext>
            </C.EditContext>

            <C.ViewContent>
              <>
                <C.BallsIllutration>
                  <C.BallOne></C.BallOne>
                  <C.BallTwo></C.BallTwo>
                  <C.BallThree></C.BallThree>
                </C.BallsIllutration>
                {fileContent ? (
                  <C.ContentFile readOnly value={fileContent} />
                ) : (
                  <div className="flex flex-1 gap-3 flex-wrap justify-center items-center text-white/30 font-semibold text-2xl">
                    Nada a visualizar
                    <img src={images.logo} alt="Logo" className="hidden sm:block" />
                    {/* <CodePreview code={codeConverted} /> */}
                  </div>
                )}
              </>
            </C.ViewContent>
          </C.Context>

          <a href="https://github.com/Vinicius-Rubia" target="_blank">
            <C.IconGitHub />
          </a>
        </C.Content>
      </C.Layout>

      <C.WaveOne src={images.waveGreenOne} />
      <C.WaveTwo src={images.waveGreenTwo} />
    </C.Container>
  );
};

export default transition(Context);
