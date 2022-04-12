import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  message: "Default!",
};

export const Pinned = Template.bind({});
Pinned.args = {
  id: 2,
  message: "Pinned",
};

export const Archived = Template.bind({});
Archived.args = {
  id: 3,
  message: "Story",
};

export const Story = Template.bind({});
Story.args = {
  id: 4,
  message: "Story",
};
