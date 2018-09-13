import React, { Component } from 'react';
import Task from '../Task';
import { connect } from 'react-redux';
import { getRecords, completeTask, unDoTask, deleteTask } from '../../ducks/task';
import { StyledTaskList } from './Style';

const mapStateToProps = state => ({
  records: getRecords(state)
});

const mapDispatchToProps = { completeTask, unDoTask, deleteTask };

class TaskList extends Component {
  onChangeHandler = (evt) => {
    const { completeTask, unDoTask } = this.props;
    const target = evt.target;
    const id = parseInt(target.id, 10);
    if (target.checked !== true) {
      unDoTask(id);
    } else {
      completeTask(id);
    }
  };

  onClickHandler = (evt) => {
    const { deleteTask } = this.props;
    const input = evt.target.parentNode.children[0];
    const id = parseInt(input.id, 10);
    deleteTask(id);
  }


  render() {
    const {records} = this.props;
    return (
      <StyledTaskList>
        {records.length
          ? records.map((item, id) => {
             return (
              <Task
                record={item}
                key={item.id}
                onCheckboxChange={this.onChangeHandler}
                onButtonClick={this.onClickHandler}
              />
          )})
          : ''}
      </StyledTaskList>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);