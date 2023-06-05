import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const { pageNumber } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const myData = data.data.filter((item, index) => {
        if (index >= 10 * (pageNumber - 1) && index <= 10 * pageNumber - 1) {
          return true;
        }
        return false;
      });
      setPosts(myData);
    };
    fetchPost();
  }, [pageNumber]);

  const [user, setUser] = useState(null);
  function Handleuser(id) {
    setUser(id);
  }

  useEffect(() => {
    document.title = "All Posts";
  }, []);

  return (
    <div>
      Enter id to view:{" "}
      <input
        onChange={(e) => {
          Handleuser(e.target.value);
        }}
      />
      <Link to={`/user/${user}`}>Submit</Link>
      <br />
      <br />
      <Link to={"/users/All"}>Get All Users!</Link>
      <h1>Posts</h1>
      {posts.map((post, index) => {
        return (
          <div key={index + 1}>
            <div>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div>
              <Link to={`/user/${post.userId}`}> By - {post.userId}</Link>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <Link to={pageNumber == 1 ? "/1" : `/${Number(pageNumber) - 1}`}>
            Prev
          </Link>
        </div>
        <div>
          <Link to={`/${Number(pageNumber) + 1}`}>Next</Link>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
