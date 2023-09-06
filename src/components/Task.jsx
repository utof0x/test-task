export const Task = ({ isActive, desc, handleClick }) => (
  <div className={`task ${isActive && "active"}`} onClick={handleClick}>
    {desc}
  </div>
);
