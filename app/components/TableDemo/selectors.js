/* eslint-disable */
import { createSelector } from 'reselect';

const selectGrid = (state) => state.get('grid');

const makeSource = () => createSelector(
  selectGrid,
  (gridState) => gridState.get('gridSource')
);

export {
  selectGrid,
  makeSource,
};
