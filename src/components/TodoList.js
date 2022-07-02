import axios from "axios";
import { useState, useEffect } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
const TodoList = ({ todos, onUpdateTodo }) => {
  const [todos_,setTodos_]=useState(todos)
  const deleteTodo =(id) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
    .then(result=>{
      axios
      .get("http://localhost:3000/todos",)
      .then((result) => {
        setTodos_(result.data);
      });
    })
  }
  const EditTodo =(todo)=>{
    axios.patch(`http://localhost:3000/todos/${todo.id}`, {
      title:todo.title,completed:!todo.completed}).then(result=>{
        window.location.reload()
      });
    }

  return (
    <ul className="list-group list-group-flush">
      {todos_.map((todo) => (
        <li
          key={todo.id}
          class="list-group-item list-group-item-primary"
        >
          <div className="row">
          <div className="col-md-10">
          <span style={{textDecoration:todo.completed?'line-through':'none'}}>{todo.title}</span>
          </div>
          <div className="col-md-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo)}
            style={{marginRight:10}}
          />
          <button type="button" onClick={()=>deleteTodo(todo.id)} class="btn btn-outline-primary">Delete</button>
          <button type ="button" onClick={()=> EditTodo(todo.id)} class="btn btn btn-outline-primary">Edit</button>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
