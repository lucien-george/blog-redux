import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, (post) => {
      this.props.history.push('/'); // Navigate after submit (redirection)
        return post;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field label="Title" name="title" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <Field className="form-control" label="Content" name="content" component="textarea" rows="8" />
          </div>
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}
// don't need mapDispatchToProps when we use form. It's another syntax (see below)

export default reduxForm({form: 'newPostForm'})(connect(null, {createPost})(PostsNew));
