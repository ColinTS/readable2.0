import React from 'react';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PostCard from 'components/PostCard'


export class Posts extends React.PureComponent {
  render() {
    const { posts } = this.props
    return (
      <div>
        //map over posts and create post cards
      </div>
    )
  }
}