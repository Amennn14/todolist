import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, toggleCompletion }) => {
  return (
    <section className="task-list-section">
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
