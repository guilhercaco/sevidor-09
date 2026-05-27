import{useContext} from "react";
import {EstoqueContext} from "..?context/EstoqueContext";

export default function TabelaProdutos(){
    const{produtos,removerPRoduto} = useContext(EstoqueContext);
}
return(
    <table>
        <thead>
            <tr>
                <th>nome</th>
                <th>Quatidade</th>
                <th>Preço</th>
                <th>ações</th>
            </tr>
        </thead>
        <tbody>
            {produtos.map((p)=>
            <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.quantidade}</td>
                <td>R${p.preco}</td>
                <td>
                    <button onClick={()=>removerPRoduto(p.id)}>Excluir</button>
                </td>
            </tr>
            )}
        </tbody>
    </table>
)