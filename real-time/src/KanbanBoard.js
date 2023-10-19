
import Kanban from './KanbandForm'
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); 

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'todo' });

  useEffect(() => {
    socket.emit('getTasks');

    socket.on('tasks', (data) => {
      setTasks(data);
    });

    socket.on('taskCreated', (task) => {
      setTasks([...tasks, task]);
    });

    socket.on('taskUpdated', (updatedTask) => {
      setTasks((prevTasks) => prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
    });

    socket.on('taskDeleted', (deletedTaskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== deletedTaskId));
    });

    return () => {
      socket.removeAllListeners();
    };
  }, [tasks]);

  const createTask = () => {
    socket.emit('createTask', newTask);
    setNewTask({ title: '', description: '', status: 'todo' });
  };

  const updateTask = (updatedTask) => {
    socket.emit('updateTask', updatedTask);
  };

  const deleteTask = (taskId) => {
    socket.emit('deleteTask', taskId);
  };

  return (
    <div>
    <Kanban tasks={tasks} createTask={createTask} updateTask={updateTask} deleteTask={deleteTask} />

 
    </div>
  );
}

export default KanbanBoard;
