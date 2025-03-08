import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";

const socket = io("http://localhost:5000"); // Ensure backend is running

// Styled Components for UI
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.taskBg};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
`;

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Listen for initial task load
    socket.on("loadTasks", (loadedTasks) => {
      setTasks(loadedTasks);
    });

    // Listen for task updates
    socket.on("taskUpdated", (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off("loadTasks");
      socket.off("taskUpdated");
    };
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = { id: Date.now(), title: newTask };
      socket.emit("addTask", task);
      setNewTask(""); // Clear input
    }
  };

  const deleteTask = (id) => {
    socket.emit("deleteTask", id);
  };

  return (
    <Container>
      <h1>Task Dashboard (Real-time)</h1>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id}>
              {task.title}
              <Button onClick={() => deleteTask(task.id)}>X</Button>
            </TaskItem>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </TaskList>
    </Container>
  );
};

export default TaskDashboard;
