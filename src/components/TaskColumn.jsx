// TaskColumn.jsx
import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  title,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
  onMoveTask,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{title}</h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                description={task.description}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
                status={task.status}
                onMoveTask={onMoveTask}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
