
import { useCount } from "../../Hooks/useCounter"

export const CounterCustom = ()=>{
    
   // const {contador, aumentar,decremetnar}=useCount();
   
  
   const valor=useCount(10);
    return (
        <>
          
            <h1>Valor: {valor.contador}</h1>
            <button className="btn btn-primary" onClick={()=>(valor.aumentar(2))} >+</button>
            <button className="btn btn-primary" onClick={()=>(valor.reset())} >reset</button>
            <button className="btn btn-primary" onClick={()=>(valor.decrementar(2))} >-</button>
        </>
    )
}