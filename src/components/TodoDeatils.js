import React, { useState } from "react";

function TodoDetails({ task }) {
	const [editClass, setEditClass] = useState("fa-solid fa-pen-to-square");
	const [isCompleted, setIsCompleted] = useState(task.completed);

	//The editTask function is used to edit the task name. 
	const editTask = (e) => {
		let taskList = e.target.parentElement.parentElement.children[0];
		// console.log(taskList);

		if (editClass === "fa-solid fa-pen-to-square") {
			let textToBeEdited = taskList.children[1].innerText;
			const node = document.createElement("input");
			node.setAttribute("type", "text");
			node.setAttribute("value", textToBeEdited);
			node.classList.add("mystyle");
			taskList.appendChild(node);
			taskList.children[1].remove();
			setEditClass("fa-solid fa-check");
		} else {

			let newTaskAfterEdit = taskList.children[1].value;
			const node = document.createElement("div");
			node.innerText = newTaskAfterEdit;
			taskList.appendChild(node);
			taskList.children[1].remove();
			setEditClass("fa-solid fa-pen-to-square");
		}
	};

	//The deleteTask function is used to delete the task. 
	const deleteTask = (e) => {
		let taskList = e.target.parentElement.parentElement.children[0];
		taskList.parentElement.remove();
	};

	//The completeTask function is used to mark the task as completed
	const completeTask = (e) => {
		if (isCompleted) {
			//console.log(e.target.parentElement);
			setIsCompleted(false);
		} else {
			setIsCompleted(true);
		}
	};

	return (
		<div className="item_div">
			<div className="icon-tasks">
				<i className="fa-solid fa-circle-check" style={{ color: (isCompleted ? " rgb(115, 74, 239)" : "") }} onClick={completeTask}></i>
				<div className={"task-name " + (isCompleted ? "com" : " ")}>
					{task.title}
				</div>
			</div>
			<div className="icons">
				{isCompleted ? <i className={editClass} onClick={() => alert("Completed Task Can't Edited")}></i> : <i className={editClass} onClick={editTask}></i>}
				<i className="fa-solid fa-trash" onClick={deleteTask}></i>
			</div>
		</div>


	);
}

export default TodoDetails;