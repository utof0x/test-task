import { Task } from "./Task";

export const Column = ({
  status,
  title,
  tasks,
  movingTask,
  setMovingTask,
  changeTaskStatus,
}) => {
  const handleClick = (columnStatus) => {
    if (movingTask !== null) {
      changeTaskStatus(columnStatus);
    }
  };

  return (
    <div className="column" onClick={() => handleClick(status)}>
      <div className="column-title">{title}</div>
      <div className="column-list">
        {tasks.map(({ id, desc }) => (
          <Task
            key={id}
            isActive={movingTask === id}
            desc={desc}
            handleClick={() => setMovingTask(id)}
          />
        ))}
      </div>
    </div>
  );
};
