import {useState } from 'react';
import '../Css/ToDoPanel.css'
function ToDoPanel(props){
    const [text,setText] = useState('')
    return(
        <>
            <input className="inputTodo" type="text" 
            value={props.text} 
            onChange={
                (e) => {
                    setText(e.target.value)
                }
            }
            required/>
            <br/>
            <button className="btnAdd" onClick={
                () => {
                    if(text != ""){
                        let todo = {
                            text : text,
                            checked : false
                        }
                        let newTodos = [...props.todos]
                        newTodos.push(todo)
                        props.setTodos(newTodos)
                        localStorage.setItem("todos",JSON.stringify(newTodos));
                        props.setErrorMsg("");
                    }
                    else{
                        props.setErrorMsg("Please type a todo");
                    }
                }
            }>Valider</button>
        </>
    )
    
}
export default ToDoPanel;