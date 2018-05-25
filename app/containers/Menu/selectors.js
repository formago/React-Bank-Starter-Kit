import { createSelector } from 'reselect';

const selectCabinetMenu = (state) => state.get('cabinetMenu');

const makeSelectSource = () => createSelector(
  selectCabinetMenu,
  (cabinetMenuState) => {

    var source = cabinetMenuState.get('source');
    // source.unshift({
    //   menuId: 2443,
    //   parentMenuId: 0,
    //   menuName: "Главная",
    //   url: "",
    //   childList: []
    // });
    // source.push({
    //   menuId: 2445,
    //   parentMenuId: 0,
    //   menuName: "Настройки",
    //   url: "/Settings",
    //   childList: []
    // });
    return cabinetMenuState.get('source')
  }
);


const makeMenuId = () => createSelector(
  selectCabinetMenu,
  (cabinetMenuState) => {



    return cabinetMenuState.get('menuId')
  }
);

export {
  selectCabinetMenu,
  makeSelectSource,
  makeMenuId
};
