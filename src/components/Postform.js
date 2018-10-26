import React, { Component } from "react";
import { createPost } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              type="body"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//export default Postform;
const mapStateToProps = state => ({
  posts: state.posts.items
});

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { createPost }
)(Postform);
