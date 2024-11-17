import { useState, useEffect } from "react";
import { getProjectTasks, deleteTask, addTask } from "../utils/todoist-api";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

const TasksList = ({ projectId }) => {
  const [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    getProjectTasks(projectId).then((tasks) => {
      setProjectTasks(tasks);
    });
  }, [projectId]);

  // Well done: You are passing the task id to the deleteTask function and updating the state correctly. Great job!
  const onTaskDelete = (id) => {
    deleteTask(id);
    const tasks = projectTasks.filter((task) => task.id !== id);
    setProjectTasks(tasks);
  };

  const onTaskSubmit = (text, resetForm) => {
    addTask(text, Number(projectId));
    setProjectTasks([{ content: text }, ...projectTasks]);
    resetForm();
  };

  return (
    <div class="todolist__list">
      <NewTaskForm onSubmit={onTaskSubmit} />
      <div class="todolist__tasks">
        {projectTasks.map((task) => (
          // Needs correcting: In react, when rendering a list of elements, each element should have a unique key prop. In this case, the task id can be used as a key. You can read more about warning keys here: https://reactjs.org/docs/lists-and-keys.html#keys
          <Task task={task} onDelete={onTaskDelete} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
