import { createSelector } from 'reselect';

const selectCabinetMenu = (state) => state.get('cabinetMenu');

const makeSelectSource = () => createSelector(
  selectCabinetMenu,
  (cabinetMenuState) => cabinetMenuState.get('source')
);

export {
  selectCabinetMenu,
  makeSelectSource,
};
