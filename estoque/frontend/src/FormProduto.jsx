import { useContext,useState } from "react";
import{ EstoqueContext}from "../context/EstoqueContext";

export default function FormProduto(){
    const{adicinarProduto} = useContext(EstoqueContext);

    const[nome,setNome] = useState("");
    const[quantidade,setQuantidade]=useState("");
    const[preco,setPreco] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        adicinarProduto({nome,quantidade,preco});
        setNome("");
        setQuantidade("");
        setPreco("");
    }
    return(
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="nome"
                value={nome}
                anChange={(e) => setNome(e.target.value)}
                />
                <input
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                anChange={(e) => setQuantidade(e.target.value)}
                />
                <input
                type="number"
                placeholder="Preço"
                value={preco}
                anChange={(e) => setPreco(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
    )
}