//Importando o hook useestate
import{ useState } from "react";
//importando o modulo do css
import styles from "@/components/Semafaro/Semafaro.module.css";
//Componente Semafaro
const Semafaro = () => {
//Criando um estado "cor" para o componete
cons[cor, setCor] = useState("cinza");
    return (
        <>
        <div 
            style= {{
                height:"100vh",
                display: "flex",
                backgroundColor: "#f0f0f0",
                flexDirection: "column"
                alignItens: "center",
            }}
            >
            <h3>Semafaro com React</h3>
            <br />
            {/*Botões*/}
            <div className={`${styles.luz} ${cor == "vermelho" ? styles.vermelho : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "amarelo" ? styles.amarelo : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "verde" ? styles.verde : styles.cinza}`}></div>
            <br />
            <div>
               {/*className ="nomeClasse : usamos para classes globaisBotões*/}
                <button className="button" onClick={() => setCor("vermelho")}>Pare!</button>
                <button className="button" onClick={() => setCor("amarelo")}>Pare!</button>
                <button className="button" onClick={() => setCor("verde")}>Pare!</button>
            </div>
        </div>
        </>
    );
};
export default Semafaro;