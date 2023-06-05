import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import UserPage from "./UserPage";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import AllUsers from "./AllUsers";
import Home from "./Home";
import NotFound from "./NotFound";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:pageNumber" element={<PostPage />} />
      <Route path="/user/:UserId" element={<UserPage />} />
      <Route path="/post/:postId" element={<PostDetails />} />
      <Route path="/users/All" element={<AllUsers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
