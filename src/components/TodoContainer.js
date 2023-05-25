import React, { useState, useEffect } from "react";
import TodoDetails from "./TodoDeatils";

function TodoContainer({ addTask }) {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState(addTask);
  // console.log(addTask);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        // console.log(json);
      });
    }, []);

  // This function is used to update the newTask state whenever a new task is added by the user. 
  useEffect(() => {
    let manualTask = addTask.map((task, index) => {
      return <TodoDetails task={task} key={index} />;
    });
    setNewTask(manualTask);
  }, [newTask]);


  return (
    <>
      {todos.length >= 1 && (
        <div id="output_div">
          {newTask}
          {todos.map((task, index) => {
            return <TodoDetails task={task} key={index} />;

          })}
        </div>
      )}{todos.length <= 1 && (
        <div id="output_div">
          <div className="span"> No Task</div>
        </div>

      )}

    </>
  );
}

export default TodoContainer;
