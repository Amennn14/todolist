import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      // Creating a new task object with unique id
      addTask({ id: uuidv4(), description: taskInput.trim(), completed: false });
      setTaskInput('');  // Clear the input after adding
    }
  };

  return (
    <section className="task-input-section">
      <div className="task-input-wrapper">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}  // Update input state
        />
        <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
      </div>
    </section>
  );
};

export default AddTask;
