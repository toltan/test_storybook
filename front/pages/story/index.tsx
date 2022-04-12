import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "@/component/index/pages/IndexPage";
import Task from "@/component/story/Task";
import "@/css/index.css";

const tasks = {
  id: 1,
  title: "Task",
  state: "State",
};

ReactDOM.render(<Task task={tasks} />, document.getElementById("root"));
