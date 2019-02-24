import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // needed to map state to props
import { fetchPosts } from '../actions';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts(); // calling the action when the component will mount
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return(
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });
  }

  render () {
    return(
      <div>
        <div className='first-row'>
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts // map redux state to props
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch); // bind the action to props
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
