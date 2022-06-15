
export const TodoItem = ({todo, deleteitem,  toggleitem}) => {
    
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span className="align-self-center block " > {todo.descrip}</span>
            {
                todo.done?
                <button className="btn btn-success" onClick={()=> toggleitem(todo.id)} >Hecho</button>
                :
                <button className="btn btn-danger" onClick={()=> toggleitem(todo.id)} >Por hacer</button>
            }
            <button className="btn btn-danger" onClick={()=>deleteitem(todo.id)} >Borrar</button>

        </li>
    )
}

