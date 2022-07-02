import { useState} from "react";
import axios from "axios";


const Form = () => {
  const [title, setTitle] = useState("");

  const CreateTodo = ( ) => {
    axios.post("http://localhost:3000/todos", {
      title:title,completed:false});
  };
  
  return (
    <>
    <div className="container">
      <form>
        <input  onChange={(e)=>setTitle(e.target.value)}   type="text" className="todo"   name="title" required placeholder="Todo title" />
        <button className="btn btn-primary m-3" onClick={()=>CreateTodo()}>Create</button>
      </form>
      </div>
      </>
  )
}

export default Form