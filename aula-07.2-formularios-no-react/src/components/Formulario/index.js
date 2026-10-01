import { useState } from "react";
const Formulario = () => {
    //criando o sestados para os campos do formulário
    const [nome, setNome] = useState("")
    const [email, setemail] = useState("")
    const [senha, setSenha] = useState("")

    //Função que trata a submissão do formulario
    const handSubmit = (evento) => {
        //Evitando comportamento padrâo de ser recarregado
        evento.preventDefault();
        console.log("O formulario foi enviado!")
        console.log(nome, email, senha)
    };

    return (
        <>
            <h1>Cadastro de usuário</h1>
            <br />
            <form onSubmit={handSubmit}>
                <input
                    type="text"
                    placeholder="Digite o seu nome..."
                    //Quando o valor do input mudar, pegue o novo valor (evento.target.value) e atualize o estado com esse valor.
                    onChange={(evento) => setNome(evento.target.value)}
                    value={nome}
                />
                <br />
                <input
                    type="email"
                    placeholder="Digite o seu email..."
                    onChange={(evento) => setEmail(evento.target.value)}
                    value={email}
                />
                <br />
                <input
                    type="passwor"
                    placeholder="Digite o seu senha..."
                    onChange={(evento) => setSenha(evento.target.value)}
                    value={senha}
                />
                <br /><br />
                <button type="submit">Cadastrar</button>
                <br /><br />
            </form>
            <h4>Chamando os estados para enxergar seus valores:</h4>
            <p>{nome}</p>
            <p>{email}</p>
            <p>{senha}</p>
        </>
    )
}

export default Formulario;