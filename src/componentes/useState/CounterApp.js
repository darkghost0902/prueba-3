import { useState } from "react"


export const  CounterApp= ()=>{
    const [state, setstate] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 20,
        contador4: 20
    })
    //const  {contador1,contador2,contador3} =state
    
  return (
    <>
    <h2>{state.contador1}</h2>
    <hr/>
    <h2>{state.contador2}</h2>
    <hr/>
    <button className="btn btn-primary" onClick={()=>(setstate({
       ...state,
       contador1: state.contador1+1,
       
    }))
    }>+</button>
   
    </>
  )

}