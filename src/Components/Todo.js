import { useState } from "react";
import '../Css/Todo.css'

function Todo(props){
    let [inputChecked, setInputChecked] = useState(props.todo.checked)
    return(
        <>
            <li style={inputChecked?{background : "#A9A9A9",color : "white"}:{background : "white"}} className="todoContainer" id={props.id}>
                <input
                className="checkbox"
                type="checkbox" 
                onClick={(e)=>{
                    if(inputChecked){
                        setInputChecked(false)
                        let newTodos = [...props.todos]
                        newTodos[props.id].checked = false
                        props.setTodos(newTodos)
                        localStorage.setItem("todos",JSON.stringify(newTodos));
                    }
                    else{
                        setInputChecked(true)
                        let newTodos = [...props.todos]
                        newTodos[props.id].checked = true
                        props.setTodos(newTodos)
                        localStorage.setItem("todos",JSON.stringify(newTodos));
                    }
                }}
                checked={inputChecked}/>
                <span className="todoText">{props.todo.text}</span>
            </li>
        </>
    )
}

export default Todo;