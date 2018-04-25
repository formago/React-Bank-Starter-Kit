import { fromJS } from 'immutable';

import {
  REQUEST_SUCCESS,
  SET_CURRENT_MENU_ITEM
} from './constants';

const initialState = fromJS({
  source: [],
});

function cabinetMenuReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      if (action) {
        return state
          .set('source', action.response.list);
      }
      else return state;
    case SET_CURRENT_MENU_ITEM:
      if (action) {        
        return state
          .set('menuId', action.menuId);
      }
    default:
      return state;
  }
}

export default cabinetMenuReducer;
