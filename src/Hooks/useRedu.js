import { useEffect, useReducer } from "react";
import { todoReduce } from "../componentes/useReduce/todoReduce";

const inicioState =[];
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'))|| [];
}

export const useRedu=()=>{
    
    const [todos, dispatch] = useReducer(todoReduce, inicioState, init );

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

   const  handleNewtodo = (todo)=>{

        dispatch( {
            type: 'agregar',
            payload: todo
        });
   }
   const handleDeletetodo = (id)=>{
   
    dispatch({
        type: 'eliminar',
        payload: id
    });

   }
   const handleToogle = (id)=>{
    console.log(id, " funcionando")
    dispatch({
        type: 'toogle',
        payload: id
    });
   } 
    return {allTodos:todos.length, pendTodos:todos.filter((e)=>e.done===false).length  ,
        
        todos, handleToogle,handleDeletetodo ,handleNewtodo

    }
}