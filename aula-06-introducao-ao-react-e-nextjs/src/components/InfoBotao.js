// Importando o hook useState : permite criar estados para os componentes
import { useState } from "react";

const Info = () => {
  const [indice, setIndice] = useState(0);
  const informacoes = ["Wagner", "Registro", "18 anos"];

    const mudarInfo = () => {
    setIndice((indiceAnterior) => (indiceAnterior + 1) % informacoes.length);
  };

  return (
    <>
      <div>
        <p>Informações: {informacoes[indice]}</p>
        <button onClick={mudarInfo}>Mudar</button>
      </div>
    </>
  );
};

export default Info;