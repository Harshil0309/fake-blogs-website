import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import UserPage from "./UserPage";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import AllUsers from "./AllUsers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/:pageNumber" element={<PostPage />} />
      <Route path="/user/:UserId" element={<UserPage />} />
      <Route path="/post/:postId" element={<PostDetails />} />
      <Route path="/users/All" element={<AllUsers />} />
    </Routes>
  </BrowserRouter>
);
