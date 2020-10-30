import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostsView from './PostsView';
import PostEditor from './PostEditor';
import { get, post } from '../utils/request';
import url from '../utils/url';
import './PostList.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPosts: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshPostList = this.refreshPostList.bind(this);
  }

  componentDidMount() {
    this.refreshPostList();
  }

  refreshPostList() {
    get(url.getPostList()).then((data) => {
      if (!data.error) {
        this.setState({
          posts: data,
          newPost: false,
        });
      }
    });
  }

  handleSave(data) {
    const postData = { ...data, author: this.props.userId, vote: 0 };
    post(url.createPost(), postData).then((data) => {
      if (!data.error) {
        this.refreshPostList();
      }
    });
  }

  handleCancel() {
    this.setState({
      newPost: false,
    });
  }
  handleNewPost() {
    this.setState({
      newPost: true,
    });
  }

  render() {
    const { userId } = this.props;
    return (
      <div className="postList">
        <div>
          <h2>帖子列表</h2> {/* 只有在登录状态，才显示发帖按钮 */}
          {userId ? <button onClick={this.handleNewPost}>发 帖</button> : null}
        </div>
        {/* 若当前正在创建新帖子，则渲染PostEditor组件 */}
        {this.state.newPost ? (
          <PostEditor onSave={this.handleSave} onCancel={this.handleCancel} />
        ) : null}
        {/* PostsView显示帖子的列表数据 */}
        <PostsView posts={this.state.posts} />
      </div>
    );
  }
}

export default PostList;
