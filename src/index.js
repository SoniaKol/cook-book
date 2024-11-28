import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Favorites from "./components/Favorites";
import Recipe from "./components/Recipe";
import SearchResult from "./components/SearchResult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search/:searchValue" element={<SearchResult />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
