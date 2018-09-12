import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel } from './Style';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    const { record, onChangeHandler } = this.props;
    return (
      <StyledTask>
        <TaskCheckbox
          type="checkbox"
          name="done"
          id="done"
          onChange={(evt, record) => onChangeHandler(evt, record)}
          checked={record.done}
        />
        <TaskLabel htmlFor="done" />
        <TaskName>{record.task}</TaskName>
      </StyledTask>
    );
  }
}

Task.propTypes = {
  record: PropTypes.object.isRequired
};
