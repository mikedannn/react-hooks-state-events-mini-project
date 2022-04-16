import React from "react";

function Task(props) {

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button onClick={props.deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
