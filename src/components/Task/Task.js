import React, { Component } from 'react';
import { StyledTask, TaskName, TaskCheckbox, TaskLabel } from './Style';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { completeTask } from '../../ducks/task';

const mapDispatchToProps = { completeTask };

class Task extends Component {
  onChangeHandler = () => {
    const { record, completeTask } = this.props;
    completeTask(record.id);
  };

  render() {
    const { record } = this.props;
    console.log(record);
    return (
      <StyledTask>
        <TaskCheckbox
          type="checkbox"
          name="done"
          id="done"
          onChange={this.onChangeHandler}
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

export default connect(
  false,
  mapDispatchToProps
)(Task);
