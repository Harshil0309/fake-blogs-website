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

  const [user,setUser]=useState(null);
function Handleuser(id){
  setUser(id);
}


  return (
    <div>
     Enter id to view: <input onChange={(e)=>{
      Handleuser(e.target.value);
     }}/>
     <Link to={`/user/${user}`}>Submit</Link>
     <br/>
     <br/>
     <Link to={"/users/All"}>Get All Users!</Link>
      <h1>Posts</h1>
      {posts.map((post,index) => {
        return (
          <div key={index+1}>
            <div>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div>
              <Link to={`/user/${post.userId}`}> By - {post.userId}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostPage;
