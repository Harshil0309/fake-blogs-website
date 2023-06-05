import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import PostPage from "./PostPage";

function UserPage() {
  const params = useParams();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchuser = async () => {
      const userdata = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.UserId}`
      );
      setUserData(userdata.data);
      // console.log(userdata)
    };
    fetchuser();
  }, []);

  // console.log(params);

  return (
    <div>
      <h3>Id: {params.UserId}</h3>
      <h3>Name: {userData.name}</h3>
      <h3>UserName: {userData.username}</h3>
      <h3>Email-Id: {userData.email}</h3>
      <h3>Phone Number: {userData.phone}</h3>
      <h3>Website: {userData.website}</h3>
      <Link to={"/"}>CLick here to go back!!</Link>
    </div>
  );
}

export default UserPage;
