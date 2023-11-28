import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostByCategory from "./pages/PostByCategory";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/byCategory/:categoryID" element={<PostByCategory />} />
          <Route path="/details/:postID" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
