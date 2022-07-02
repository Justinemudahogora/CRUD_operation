
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
// import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);
  const [title, setTitle] = useState("");

 
  const onUpdateTodo = (todo) => {
    axios.patch(`http://localhost:3000/todos/${todo.id}`, {
      completed:!todo.completed}).then(result=>{
        window.location.reload()
      });
  };

  const CreateTodo = ( ) => {
    axios.post("http://localhost:3000/todos", {
      title:title,completed:false});
  };
  
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos",)
      .then((result) => {
        setTodos(result.data);
        console.log(result.data)

      });
  }, []); //[] only fires one time when the component loads

  return (
    <div className="container">
      <form>
        <input  onChange={(e)=>setTitle(e.target.value)}   type="text" className="todo"   name="title" required placeholder="Todo title" />
        <button className="btn btn-primary m-3" onClick={()=>CreateTodo()}>Create</button>
      </form>
      {todos ? (
        <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
      ) 
      : (
        <Loading />
      )
      }
    </div>
  );
}

export default App;
