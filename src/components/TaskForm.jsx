import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "todo", // Ensure this is set to "todo"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({
      task: "",
      description: "",
      status: "todo", // Reset to "todo" after submission
    });
  };
  return (
    <header className="app_header">
      <div id="up">
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            flexDirection: "row",
            gap: "2px",
          }}
        >
          <li id="text">
            <h1>Kanban Board</h1>
            <p>A place to organise tasks to completion.</p>
          </li>
          <li id="det">
            <form id="fom" onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <div>
                  <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    placeholder="title..."
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    type="text"
                    name="description"
                    value={taskData.description}
                    placeholder="Description..."
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </li>
        </div>
      </div>
    </header>
  );
};

export default TaskForm;
