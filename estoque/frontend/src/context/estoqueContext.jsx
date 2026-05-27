import{createContetx,useState,useEffect}from "react";
import axios from "axios";
export const EstoqueContext = createContetx();
export function EstoqueProvider({children}){
    const[produto,setProdutos] = useState([]);

    const API="http://localhost:5000/api/produtos";

    const buscarProduto = async()=>{
        const res = await axios.get(API);
        setProdutos(res.data);
    }
    const adicionarProduto = async(produto)=>{
        await axios.get(API,produto);
        buscarProduto();
    }
    const ataliazarProduto= async(id,produto)=>{
        await auxios.get(API,produto);
        buscarProduto();
    }
    const removerProduto = async(id) =>{
        await axios.delete(`${API}/${id}`);
    }
    useEffect(()=>{
      buscarProduto();  
    },[]);
    return(
        <EstoqueContext.provider
            value={{
                produto,
                adicionarProduto,
                ataliazarProduto,
                removerProduto,
            }}
            >
                {children}
        </EstoqueContext.provider>
    );
}
