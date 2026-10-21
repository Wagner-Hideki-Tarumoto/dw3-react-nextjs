import {useState, useEffect} from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
//importandoa bilvioteca axios
import axios from "axios";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  //Estado para controlar p gif de carregamento
  const [loading, setLoading] = useState(true)

  //use Effect
  //Aqui será criada a função para pegar os jogos da API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games)
        console.log(response)
      } catch {
        console.log(error)
        //finally é exeuctado no final da promessa
      } finally {
        //Delay de 3 segundo para mudar o estado para false
        setTimeout(() => setLoading(false), 3000)
      }
      };
      //Invocando a função dentro do useEffect
      fetchGames();
  }, []);

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {/* Ternário para ostrar a lista de jogos ou gif de carregamento */}
          {/* Enviando a props "loading" para o componente extero */}
          {loading ? (
            <Loading loading= {loading} />
          ) : (
            <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul className= {styles.listGames}>
                <div className= {styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Capa do jogo" />
                </div>
                <div className= {styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform}</li>
                  <li>Genero: {game.descriptions.genre}</li>
                  <li>Classificação: {game.descriptions.rating}</li>
                  <li>Ano: {game.year}</li>
                  <li>
                    preço: {game.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL"
                    })}
                  </li>

                </div>
              </ul>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
