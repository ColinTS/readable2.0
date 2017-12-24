import { getCategories }  from 'utils/api';
import { LOAD_CATEGORIES } from './constants'
import { LoadCategoriesSuccessAction } from './actions'
import { call, put, takeLatest } from 'redux-saga/effects';

export function* loadCategories(action){
  try {
      const categories = yield call(getCategories)
      yield put(LoadCategoriesSuccessAction(categories))
  } catch (error) {
      
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOAD_CATEGORIES, loadCategories);
}