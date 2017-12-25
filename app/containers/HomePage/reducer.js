import { fromJS } from 'immutable';

import {
  LOAD_CATEGORIES_SUCCESS,
} from './constants';

const initialState = fromJS({
  categories: '',
});

function homeReducer(state = initialState, action){
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.categories)
    default: 
      return state
  }
}

export default homeReducer;