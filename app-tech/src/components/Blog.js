/*
 * @Author: xinyang3
 * @Date: 2021-04-12 10:19
 * @Descripttion: awesome description
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-12 10:37
 */

import { Component } from 'react';

const posts = [
  {
    id: 1,
    title: 'hello world!',
    content: 'welcome to  learning react!',
  },
  {
    id: 2,
    title: 'hello world2!',
    content: 'welcome to  learning react2!',
  },
];

function Post(post) {
  return <li>{post.value}</li>;
}

class Blog extends Component {
  constructor(props) {
    super();
  }

  render() {
    const elem = (
      <ul>
        {posts.map((post) => (
          <Post key={post.id} value={post.content} />
        ))}
      </ul>
    );

    return elem;
  }
}

export default Blog;
