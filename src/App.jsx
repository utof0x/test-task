import { useRef, useState } from "react";

import "./App.css";
import { Column } from "./components/Column";
import { filterTasks } from "./functions";
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TODO } from "./constants";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const [movingTask, setMovingTask] = useState(null);
  const { todoTasks, inProgressTasks, doneTasks } = filterTasks(tasks);

  const createTask = () => {
    if (inputRef.current.value) {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          desc: inputRef.current.value,
          status: STATUS_TODO,
        },
      ]);
    } else {
      inputRef.current.classList.add("with-error");
    }
  };

  const changeTaskStatus = (newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === movingTask) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
    setMovingTask(null);
  };

  return (
    <div className="app">
      <div className="add-block">
        <input
          className="add-input"
          placeholder="Add task"
          ref={inputRef}
          onChange={(e) => {
            if (e.target.classList.contains("with-error")) {
              e.target.classList.remove("with-error");
            }
          }}
        />
        <button className="add-button" onClick={() => createTask()}>
          Add
        </button>
      </div>
      <div className="columns-block">
        <Column
          status={STATUS_TODO}
          title="To-Do:"
          tasks={todoTasks}
          movingTask={movingTask}
          setMovingTask={setMovingTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Column
          status={STATUS_IN_PROGRESS}
          title="In progress:"
          tasks={inProgressTasks}
          movingTask={movingTask}
          setMovingTask={setMovingTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Column
          status={STATUS_DONE}
          title="Done:"
          tasks={doneTasks}
          movingTask={movingTask}
          setMovingTask={setMovingTask}
          changeTaskStatus={changeTaskStatus}
        />
      </div>
    </div>
  );
};

export default App;
