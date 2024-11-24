import React from 'react';

const TaskItem = ({ task, removeTask, toggleCompletion }) => {
  return (
    <li className="task-item">
      <span
        className="task-description"
        style={task.completed ? { textDecoration: 'line-through' } : {}}
      >
        {task.description}
      </span>
      <button
        className="toggle-completion-button"
        onClick={() => toggleCompletion(task.id)}
      >
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button
        className="remove-task-button"
        onClick={() => removeTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
