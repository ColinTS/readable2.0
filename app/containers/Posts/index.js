import React from 'react';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PostCard from 'components/PostCard';
import PropTypes from 'prop-types';
import { LoadPostsAction } from './actions';
import saga from './saga'; 


export class Posts extends React.PureComponent {
  componentWillMount(){
    const categoryName = this.props.match.params.name;
    this.props.loadPosts(categoryName);
  }
  render() {
    return (
      <div>
        {/* map over posts and create post cards */}
        {this.props.match.params.name}
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (category) => dispatch(LoadPostsAction(category)),
  };
}

const withConnect = connect(false, mapDispatchToProps);
const withSaga = injectSaga({ key: 'posts', saga });

Posts.propTypes = {
  match: PropTypes.object,
  loadPosts: PropTypes.func,
};

export default compose(
  withSaga,
  withConnect,
)(Posts);
