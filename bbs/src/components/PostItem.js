import React from 'react';
import { getFormatDate } from '../utils/date';
import './PostItem.css';
import likeImg from '../images/like.png';

function PostItem(Props) {
  const { post } = Props;
  return (
    <li className="postItem">
      <div className="title"> {post.title} </div>
      <div>
        创建人: <span> {post.author.username} </span>
      </div>
      <div>
        更新时间：<span>{getFormatDate(post.updatedAt)}</span>
      </div>
      <div className="like">
        <span>
          <img alt="vote" src={likeImg} />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

export default PostItem;
