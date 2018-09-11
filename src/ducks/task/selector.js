export const getRecords = state => {
  switch (state.tasks.visibility) {
    case 'all':
      return state.tasks.records;
    case 'active':
      let tasks = state.tasks.records.filter(item => {
        return !item.done;
      });
      return tasks;
    case 'complete':
      tasks = state.tasks.records.filter(item => {
        return item.done;
      });
      return tasks;
    default:
      return tasks;
  }
};
