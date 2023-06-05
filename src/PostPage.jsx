import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data.data);
      // console.log(data.data);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div>
            <div>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div>
              <Link to={`/${post.userId}`}> By - {post.userId}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostPage;
