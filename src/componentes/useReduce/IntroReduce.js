

const inicioState =[{
    id:1,
    todo: "primer elemento",
    done: true
}]
const reduce = (state= inicioState, action= {})=>{

    if(action.type= "agregar"){
        return [...state, action.newTodo]
    }


    return state
}

const segundoState= {
    id:2,
    todo: " segundo estado",
    done: true
}

const  addState = {
    type:"agregar",
    newTodo:segundoState
}

const todos= reduce(inicioState,addState)

console.log({state:todos});


