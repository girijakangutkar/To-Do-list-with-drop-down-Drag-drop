// TaskCard.jsx
import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
const TaskCard = ({
  title,
  description,
  handleDelete,
  index,
  setActiveCard,
  status,
  onMoveTask,
}) => {
  const handleMoveTask = (e) => {
    onMoveTask(index, e.target.value);
  };

  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="tle">
        {title}
        <select value={status} onChange={handleMoveTask}>
          <option value="todo">Backlog</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
          <option value="won't do">Won't do</option>
        </select>
      </p>
      <p className="des">
        {description}
        <div className="del" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </p>
      <div className="task_card_bottom_line"></div>
    </article>
  );
};

export default TaskCard;
