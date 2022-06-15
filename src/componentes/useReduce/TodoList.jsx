import { TodoItem } from "./TodoItem"


export const TodoList= ({todos=[] , deletelist,  togglelist})=>{
      
    todos.map((todo)=>{
        console.log("lista funcionando", todo.id)
        
    })

    return (
        <ul className="list-group">
            {
                todos.map((todo)=>
                    <TodoItem key={todo.id} todo={todo}  deleteitem={deletelist} toggleitem={ togglelist}/>
                )
            }
            
        </ul>
    )


}