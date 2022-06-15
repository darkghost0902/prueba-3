import { useForm } from "../../Hooks/useForm"

export const TodoAdd = ( {newTodo})=>{

    const {descrip, inputChange, resetform} = useForm({descrip: ''});

    const FormSubmit = (event) =>{
        event.preventDefault();
        if (descrip.length<=0) return;
        const newtodos = {
            id: new Date().getTime(),
            descrip: descrip,
            done:false
        }
        newTodo(newtodos);
       // console.log(newTodo);
        
        }
    return (
        <form action="" onSubmit={FormSubmit}>
            <input type="text" placeholder="Que hay q hacer" className="form-control"
                    name="descrip" value={descrip} onChange={inputChange}
            />
            <button className="btn btn-primary mt-2" type="submit">Agregar</button>
        </form>
    )

}