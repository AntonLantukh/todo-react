import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel } from './Style';

class Task extends Component {
  render() {
    const { record } = this.props.record;
    return (
      <StyledTask>
        <TaskCheckbox type="checkbox" name="done" id="done" />
        <TaskLabel htmlFor="done" />
        <TaskName>{record}</TaskName>
      </StyledTask>
    );
  }
}

export default Task;
