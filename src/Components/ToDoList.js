import Todo from "./Todo"
function ToDoList(props){
    console.log(props.todos)
    return(
        <ul style={{listStyle : "none", padding : "0px", margin : "0px"}}>
            {
                props.todos.map((todo, id)=><Todo id={id} todo={todo} todos={props.todos} setTodos={props.setTodos}/>)
            }
        </ul>
    )
}
export default ToDoList;