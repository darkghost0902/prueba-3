import React from "react";
import { useCount } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
export  const Multiplehooks=()=>{
   
    const {contador,aumentar}= useCount(1);
    
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${contador}`);
    const {loading, error, data}= state

    const {quote, author, quote_id}= !!data && data[0];
  
    console.log(quote);
    return(

        <>
        <h1>Multiplehooks</h1>
        <hr/>
        {
            loading?
            (
                <div className="alert alert-info text-center" >
                    loading.....
                </div>
            )
            :
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <br/>
                    <footer className="blockquote-footer">{author} <cite title="Source Title">{quote_id}</cite></footer>
                </blockquote>
            )

        }
        <button className="btn btn-primary" onClick={()=>aumentar(1)} >Siguiente</button>




        </>
    )
}