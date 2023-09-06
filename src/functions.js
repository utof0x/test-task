import { STATUS_TODO, STATUS_IN_PROGRESS, STATUS_DONE } from "./constants";

export const filterTasks = (taskList) => {
  const todoTasks = [],
    inProgressTasks = [],
    doneTasks = [];

  taskList.forEach((task) => {
    if (task.status === STATUS_TODO) {
      todoTasks.push(task);
    } else if (task.status === STATUS_IN_PROGRESS) {
      inProgressTasks.push(task);
    } else if (task.status === STATUS_DONE) {
      doneTasks.push(task);
    }
  });

  return { todoTasks, inProgressTasks, doneTasks };
};