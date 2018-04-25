/* eslint-disable */
import { fromJS } from 'immutable';

import {
  REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({
  gridSource: [],
});

function gridReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:    
      return state
        .set('gridSource', action.response.list);
    default:
      return state;
  }
}

export default gridReducer;
