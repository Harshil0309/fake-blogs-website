import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostDetails() {
  const params = useParams();
  // console.log(params);

  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchpost = async () => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
      );
      setDetails(data.data);
    };
    fetchpost();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
      );
      setComments(data.data);
      console.log(data.data);
    };
    fetchComments();
  }, []);

  return (
    <div>
      {details.length == 0 ? (
        <h3>Loading</h3>
      ) : (
        <h3>
          UserId: {details.userId}
          <br />
          <br />
          Id: {details.id}
          <br />
          <br />
          Title: {details.title}
          <br />
          <br />
          Body: {details.body}
          <br />
          <br />
          <Link to={"/"}>CLick here to go back!!</Link>
        </h3>
      )}

      <h3>Comments</h3>
      {comments.map((comment, index) => {
        return (
          <div>
            <h5>
              {index + 1} {comment.body}
            </h5>
            <h5>By-{comment.name}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default PostDetails;
