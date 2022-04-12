import React from "react";
import PureTaskList from "./TaskList";
import Task from "./Task";
import * as TaskStories from "./Task.stories";

export default {
  component: PureTaskList,
  title: "PureTaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  tasks: [
    TaskStories.Default.args.message,
    TaskStories.Pinned.args.message,
    "{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' }",
    "{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' }",
    "{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' }",
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  loading: false,
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    "{ id: 6, message: 'With Pinned Tasks' }",
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: [],
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  tasks: [],
};
