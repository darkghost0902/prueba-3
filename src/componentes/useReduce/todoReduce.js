
export const todoReduce = (inicioState=[], action)=>{
 
        switch (action.type){
            case 'agregar':
                
                return   [...inicioState, action.payload]
            case 'eliminar':
               
               return  inicioState.filter((c)=>c.id!==action.payload)

               case 'toogle':
               
                return  inicioState.map((c)=>{
                    if(c.id===action.payload)
                    {return {
                        ...c,
                        done:!c.done
                    }}
                    return c

                }  ); 
            
                default:

                return inicioState
               

        }

    
}