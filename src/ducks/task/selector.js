import { createSelector } from 'reselect'

const getVisibility = (state) => state.tasks.visibility;
const getRecords = (state) => state.tasks.records;

export const getActualRecords = createSelector(
  [getVisibility, getRecords], (visibility, records) => {
    switch (visibility) {
      case 'all':
        return records;
      case 'active':
        let tasks = records.filter(item => {
          return !item.done;
        });
        return tasks;
      case 'complete':
        tasks = records.filter(item => {
          return item.done;
        });
        return tasks;
      default:
        return [];
    }
  }
);
