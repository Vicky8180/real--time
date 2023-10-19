import React, { useState } from 'react';
import './App.css'
function KanbanBoard({ tasks, createTask, updateTask, deleteTask }) {
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'todo' });

  const handleCreateTask = () => {
    createTask(newTask);
    setNewTask({ title: '', description: '', status: 'todo' });
  };

  return (
    <div>
      <div className="board">
        <div className="column">
          <h2>To-Do</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === 'todo')
              .map((task) => (
                <div className="task" key={task._id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button onClick={() => updateTask({ ...task, status: 'inProgress' })}>Start</button>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
              ))}
          </div>
        </div>

        <div className="column">
          <h2>In Progress</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === 'inProgress')
              .map((task) => (
                <div className="task" key={task._id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button onClick={() => updateTask({ ...task, status: 'done' })}>Complete</button>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
              ))}
          </div>
        </div>

        <div className="column">
          <h2>Done</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.status === 'done')
              .map((task) => (
                <div className="task" key={task._id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="task-form">
        <h2>Create Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        >
          <option value="todo">To-Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={handleCreateTask}>Create</button>
      </div>
    </div>
  );
}

export default KanbanBoard;
