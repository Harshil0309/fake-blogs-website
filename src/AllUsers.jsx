import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllUsers() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserDetails(data.data);
      //   console.log(data.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <h1>List of All Users </h1>

      {userDetails.map((user, index) => {
        return (
          <div key={index + 1}>
            <h3>
              {user.id}) {user.name} - {user.email}
            </h3>
          </div>
        );
      })}
      <Link to={"/"}>CLick here to go back!!</Link>
    </div>
  );
}

export default AllUsers;
