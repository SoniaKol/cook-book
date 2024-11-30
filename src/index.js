import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Favorites from "./components/Favorites";
import Recipe from "./components/Recipe";
import SearchResult from "./components/SearchResult";
import CategoriesList from "./components/CategoriesList";
import CategoryRecipes from "./components/CategoryRecipes";
import MainIngredientList from "./components/MainIngredientList";
import AreaList from "./components/AreaList";
import AreaRecipes from "./components/AreaRecipes";
import IngredientRecipes from "./components/IngredientRecipes";
import { RecipeProvider } from "./components/RecipeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/ingredients" element={<MainIngredientList />} />
            <Route path="/area" element={<AreaList />} />
          </Route>
          <Route path="/categories/:category" element={<CategoryRecipes />} />
          <Route
            path="/ingredients/:ingredient"
            element={<IngredientRecipes />}
          />
          <Route path="/area/:area" element={<AreaRecipes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:searchValue" element={<SearchResult />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </RecipeProvider>
    </Router>
  </React.StrictMode>
);
