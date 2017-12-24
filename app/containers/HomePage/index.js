/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga'; 
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LoadCategoriesAction } from './actions'
import { createStructuredSelector } from 'reselect';
import { makeSelectCategories } from './selectors';
import Category from 'components/Category'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.loadCategories()
  }
  
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Category categories={this.props.categories}/>
      </div>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(LoadCategoriesAction()),
  }
}

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
