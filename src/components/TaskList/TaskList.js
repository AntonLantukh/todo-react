import React, { Component } from 'react';
import Task from '../Task';
import { connect } from 'react-redux';
import { getRecords } from '../../ducks/task';

const mapStateToProps = state => {

return {
  records: getRecords(state)
};

class TaskList extends Component {
  render() {
    const records = this.props.records;
    return (
      <div>
        {records.length
          ? records.map(item => {
              return <Task record={item.task} />;
            })
          : ''}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
