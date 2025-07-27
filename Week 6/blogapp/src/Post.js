import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, body } = this.props;

    return (
      <div style={{ marginBottom: '20px' }}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
