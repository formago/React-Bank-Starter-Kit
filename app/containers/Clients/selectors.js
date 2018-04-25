import { createSelector } from 'reselect';

const selectClients = (state) => state.get('clients');

const makeSource = () => createSelector(
  selectClients,
  (gridState) => gridState.get('gridSource')
);
const makeColumns = () => createSelector(
  selectClients,
  (gridState) => gridState.get('gridColumns')
);
export {
  selectClients,
  makeSource,
  makeColumns
};
