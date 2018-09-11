import React, { Component } from 'react';
import Task from '../Task';
import { connect } from 'react-redux';
import { getRecords } from '../../ducks/task';
import { StyledTaskList } from './Style';

const mapStateToProps = state => ({
  records: getRecords(state)
});

class TaskList extends Component {
  render() {
    const records = this.props.records;
    return (
      <StyledTaskList>
        {records.length
          ? records.map((item, id) => <Task record={item} key={id} />)
          : ''}
      </StyledTaskList>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
