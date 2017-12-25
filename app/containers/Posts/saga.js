import { call, put, takeLatest } from 'redux-saga/effects';
import { getPosts }  from 'utils/api';
import { LOAD_POSTS } from './constants';
import { LoadPostsSuccessAction } from './actions';

export function* loadPosts(action){
  try {
      const posts = yield call(getPosts, action.category);
      yield put(LoadPostsSuccessAction(posts));
  } catch (error) {
      
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts);
}