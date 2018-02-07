
import React, { Component } from 'react';

class PostForm extends Component {
  constructor () {
    super()

    this.state = {
      user: 'Q',
      text: 'dogs'
    }
  }


  handleClick() {
    const post = {
      user: this.state.user,
      text: this.state.text
    }
    this.props.addPost(post);
  }

  render() {
    return (
      <form className="beer-form">
        <h3>Add a New Post</h3>

        <div className="form-group">
          <input value={this.state.text} type="text" id="post-text" className="form-control" placeholder="Post Text" onChange={ event =>
      this.setState({text: event.target.value})
    }>
          </input>

          <br/>

          <input value={this.state.user} type="text" id="post-user" className="form-control" placeholder="Your Name" onChange={ event =>
      this.setState({user: event.target.value})
    }>
          </input>
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary">Post</button>

      </form>
    );
  }
}

export default PostForm;
