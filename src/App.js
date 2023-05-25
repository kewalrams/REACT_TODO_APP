import { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [task, setTask] = useState([]);

  //The `addTodo` function is used to add a new task to the list. 
  const addTodo = () => {
    let newTask = document.getElementById("inputTask");
    let newTaskObj = {
      completed: false,
      title: newTask.value,
    };
    task.push(newTaskObj);
    console.log(task);
    setTask(task);
    newTask.value = "";
  };

  // const [newTask, setNewTask] = useState(addTask);
  return (
    <>
      <main>
        <div className="container">
          <div className="middle">REACT TODO LIST </div>
          <div className="input_form" id="todo_form">
            <input
              type="text"
              name="todo_input_text"
              id="inputTask"
              placeholder="Enter New TODO"
            />
            <button id="todo_add_btn" onClick={addTodo}>
              ADD
            </button>
          </div>
          <TodoContainer addTask={task} />


        </div>
      </main>
    </>
  );
}

export default App;
