import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel } from './Style';
import PropTypes from 'prop-types';

class Task extends Component {
  render() {
    const { record } = this.props;
    return (
      <StyledTask>
        <TaskCheckbox type="checkbox" name="done" id="done" />
        <TaskLabel htmlFor="done" />
        <TaskName>{record}</TaskName>
      </StyledTask>
    );
  }
}

Task.propTypes = {
  record: PropTypes.string.isRequired
}

export default Task;
