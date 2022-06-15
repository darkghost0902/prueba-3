
import { useRedu } from "../../Hooks/useRedu";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const AppTodo = ()=>{
   
    const { allTodos, pendTodos,todos, handleToogle,handleDeletetodo ,handleNewtodo }= useRedu();
    return (
        <>
        <h1>Total de Tareas: {allTodos}  <small>Pendientes: {pendTodos}</small></h1>
        <hr/>
        <div className="row">
            <div className="col-md-7">
                <TodoList  todos={todos} deletelist={handleDeletetodo} togglelist={ handleToogle}/>

            </div>
            <div className="col-md 5 mt-3">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoAdd newTodo ={handleNewtodo}/>
            </div>
        </div>
        
        </>
        

    )
}