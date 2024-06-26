// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");
const SECTIONS = [
  { title: "Backlog", status: "todo" },
  { title: "Doing", status: "doing" },
  { title: "Done", status: "done" },
  { title: "Won't do", status: "won't do" },
];

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  };

  const onMoveTask = (taskIndex, newStatus) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        {SECTIONS.map((section, index) => (
          <div className="card" key={index}>
            <TaskColumn
              title={section.title}
              tasks={tasks}
              status={section.status}
              handleDelete={handleDelete}
              setActiveCard={setActiveCard}
              onDrop={onDrop}
              onMoveTask={onMoveTask}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
