import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import PageHeader from './components/PageHeader';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete homework', completed: false },
    { id: 2, description: 'Buy groceries', completed: true },
    { id: 3, description: 'Clean the room', completed: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="app-container">
        <PageHeader />
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </div>
  );
};

export default App;
