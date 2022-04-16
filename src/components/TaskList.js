import React from "react";
import Task from "./Task";

function TaskList(props) {

  function deleteTask(event) {
    let selectedTaskText = event.target.parentElement.children[1].innerText;
    let filteredTasks = props.tasks.filter(task => {
      return task.text !== selectedTaskText
    }) 
    console.log(filteredTasks)
    props.setTasks(filteredTasks)
  }

  function renderTasks() {
    return props.tasks.map(task => {
      return (
        <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
      )
    })
  }
  return (
    <div className="tasks">
      {renderTasks()}
    </div>
  );
}

export default TaskList;
