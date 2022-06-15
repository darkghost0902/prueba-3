import React from "react";
export const ShowIncrementar =React.memo(({increment}) =>{

    console.log("no deberia funcionar mas de una vez");
    return (
        <>
            <button className=" btn btn-primary"  onClick={()=> {increment(10)}}>
                Incrementar
            </button>
        </>
    )
})