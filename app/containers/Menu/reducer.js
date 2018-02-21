import { fromJS } from 'immutable';

import {
  REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({
  source: [],
});

function cabinetMenuReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return state
       .set('source', action.response);
    default:
      return state;
  }
}

export default cabinetMenuReducer;
