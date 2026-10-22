import styles from "@/components/CreateContent/CreateContent.module.css";
//Importando o hook useState
import { useState } from "react";
//importando o bilbioteca axios
import axios from "axios";

  const CreateContent = () => {
  //Criando os estados para armazenar as informações do formulario
  const [tittle, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setrating] = useState("")
  const [year, setyear] = useState("")
  const [price, setprice] = useState("")

  //Função que envia os dados para API (cadastrar um jogo)
  const handleSubmit = async (event) => {
  //Enviando o recarregamento da página
  event.preventdefault();
  //Verificando se todos os camppos do formulario foram preenchidos
  if(tile && Platform && genre && rating && year && price !=="") {
    //se tudo foi preenchido, cria o JSON com os dados do jogo
    const game = {
      title: title,
      year: year,
      price: price,
      dscriptions:  {
        platform: platform,
        genre: genre,
        rating: rating,
      },
    };
    //Enviando uma requisição POST para a API
    try {
      const response = await axios.post("http://localhost:4000/games", game);
      //enviando o retorno para a API
      if (response.status === 201) {
        alert("Game cadastrado com sucesso");
    }
  }catch (error) {
    console.error(error);
  }
  }else {
    alert("Por favor, preencha todos os campo!");
  }
};
  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={title}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={title}

          <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={genre}
          />

          <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          //coletando o dado do formulario e atualizando o estado
          onChange={(e) =>setTitle(e.target.value)}
          value={rating}
          />
      </form>
    </div>
  );
};

export default CreateContent;
