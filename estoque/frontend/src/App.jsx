import {EstoqueProvider} from "./context/EstoqueContext";
import FormProduto from"./components/FormPRoduto";
import TabelaProdutos from"./components/TabelaProdutos";

export default function Aoo(){
  return(
    <EstoqueProvider>
      <h1>controle de Estoque</h1>
    <FormProduto/>
    <TabelaProdutos/>
    </EstoqueProvider>
  )
}