import { useState } from "react"


export const useCount =(inicio=10)=>{
    
    const [contador, setcontador] = useState(inicio);

    const aumentar = (factor=1)=>{
        setcontador(contador+factor)
    }
    const decrementar = (factor=1)=>{
        setcontador(contador-factor)
    }
    const reset = ()=>{
        setcontador(inicio);
    }

    return (
        {
            contador,
            aumentar,
            decrementar,reset
        }
    )
}