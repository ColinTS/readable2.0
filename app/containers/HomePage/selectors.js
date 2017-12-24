import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('categories')
);

export {
  selectHome,
  makeSelectCategories,
};