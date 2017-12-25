import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL,
} from './constants';

export function LoadPostsAction (category) {
  return {
    type: LOAD_POSTS,
    category
  }
}

export function LoadPostsSuccessAction (posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
}

export function LoadPostsFailAction () {
  return {
    type: LOAD_POSTS_FAIL
  }
}