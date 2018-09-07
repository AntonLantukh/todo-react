import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel } from './Style';

class Task extends Component {
  render() {
    return (
      <StyledTask>
        <TaskCheckbox type="checkbox" name="done" id="done" />
        <TaskLabel htmlFor="done" />
        <TaskName>Помыть посуду</TaskName>
      </StyledTask>
    );
  }
}

export default Task;
