import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [filterBy, setFilterBy] = useState("All");

  function filterTasksByCategory(event) {
     setFilterBy(event.target.innerText)
     filterTasks();
  }

  function filterTasks() {
    return tasks.filter(task => {
      if (filterBy === "All") {
        return true
      } else {
        return task.category === filterBy
      }
    });
  }

  let filteredTasks = filterTasks();

  let renderedTasks = filterBy ? filteredTasks : TASKS

  function onTaskFormSubmit([details, category]) {
    setTasks([...tasks, {text: details, category: category}])
    document.getElementById('task-details').value = "";
    document.getElementById('task-categories').value = "";
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasksByCategory={filterTasksByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={renderedTasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
