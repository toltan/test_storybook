import React, { memo } from "react";
import Task from "./Task";

import { connect } from "react-redux";
import { archiveTask, pinTask } from "../../store/story/redux";

interface TaskListInterface {
  loading: boolean;
  tasks: Array<string>;
}

const PureTaskList: React.FC<TaskListInterface> = memo(({ loading, tasks }) => {
  // const events = {
  //   onPinTask,
  //   onArchiveTask,
  // };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task, i) => (
        <Task key={`task_${i}`} id={i} message={task} />
      ))}
    </div>
  );
});

PureTaskList.defaultProps = {
  loading: false,
};
PureTaskList.displayName = "PureTaskList";

export default connect(({ tasks }) => ({
  tasks: tasks.filter((t) => t === "TASK_INBOX" || t === "TASK_PINNED"),
}))(PureTaskList);
