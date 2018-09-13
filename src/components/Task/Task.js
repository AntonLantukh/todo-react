import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel, TaskButton } from './Style';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    const { record, onCheckboxChange, onButtonClick } = this.props;
    return (
      <StyledTask>
        <TaskCheckbox
          type="checkbox"
          name={'checkbox' + record.id}
          id={record.id}
          checked={record.done}
          onChange={onCheckboxChange}
        />
        <TaskLabel htmlFor={record.id} />
        <TaskName style={{textDecoration: record.done ? "line-through" : ""}}>{record.task}</TaskName>
        <TaskButton onClick={onButtonClick} />
      </StyledTask>
    );
  }
}

Task.propTypes = {
  record: PropTypes.object.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};
