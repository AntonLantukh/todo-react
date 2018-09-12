import React, { Component } from 'react';
import Task from '../Task';
import { connect } from 'react-redux';
import { getRecords, completeTask } from '../../ducks/task';
import { StyledTaskList } from './Style';

const mapStateToProps = state => ({
  records: getRecords(state)
});

const mapDispatchToProps = { completeTask };

class TaskList extends Component {
  onChangeHandler = (evt, record) => {
    debugger;
    const { completeTask } = this.props;
    console.log(record);
    completeTask(record.id);
  };

  render() {
    const records = this.props.records;
    return (
      <StyledTaskList>
        {records.length
          ? records.map((item, id) => (
              <Task
                record={item}
                key={id + item.task}
                onChangeHandler={this.onChangeHandler}
              />
            ))
          : ''}
      </StyledTaskList>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
