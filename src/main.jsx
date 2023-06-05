import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import UserPage from "./UserPage";
import PostDetails from "./PostDetails";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path="/:UserId" element={<UserPage />} />
      <Route path="/post/:postId" element={<PostDetails />} />
    </Routes>
  </BrowserRouter>
);
