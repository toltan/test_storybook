import React, { memo } from "react";

interface TaskInterface {
  id: number;
  message: string;
}

const Task: React.FC<TaskInterface> = memo(({ id, message }) => {
  return (
    <div className="list-item">
      {`id: ${id}`},&nbsp;
      {`message: ${message}`}
      <input type="text" style={{ background: "red" }} />
    </div>
  );
});

Task.displayName = "Task";

export default Task;
