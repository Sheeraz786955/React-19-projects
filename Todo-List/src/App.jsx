/* eslint-disable no-unused-vars */
import { useActionState, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([]);

  const handleForm = (prevData, formData) => {
    const name = formData.get("ADD");

    if (!todo.includes(name)) {
      let todolist = [...todo, name];
      setTodo(todolist);
    } else {
      alert("TODO Already Exits");
    }
  };
  const [data, action, pending] = useActionState(handleForm);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-12 col-12 m-auto">
            <div className="bg-color rounded-3 my-5 mx-sm-5 border border-2 border-primary">
              <h1 className="text-white text-center py-4">TO DO LIST</h1>
              <div className="text-center">
                <form action={action}>
                  <input
                    className="m-1 me-2 py-1 ps-1"
                    type="text"
                    placeholder="Add ToDo"
                    name="ADD"
                  />
                  <button className="btn btn-primary mb-1">ADD</button>
                </form>
              </div>
              <h2 className="text-center text-white my-4">Task List</h2>
              <Todo todo={todo} setTodoList={setTodo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
