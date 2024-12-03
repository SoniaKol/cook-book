import BackButton from "./BackButton";
import Header from "./Header";
import { RecipeContext } from "../context/RecipeContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import RecipeListCard from "./RecipeListCard";
import "../styles/favorites.css";

const Favorites = () => {
  const [favorites] = useContext(RecipeContext);
  const [favoriteData, setFavoriteData] = useState([]);

  const url = `${BASE_URL}${KEY}${APIendpoints.lookupById}`;

  const fetchFavoriteData = useCallback(
    async (id) => {
      try {
        const response = await fetch(`${url}${id}`);
        return response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [url]
  );

  useEffect(() => {
    const fetchAllFavoriteData = async () => {
      if (favorites.length > 0) {
        const data = await Promise.all(
          favorites.map((id) => fetchFavoriteData(id))
        );
        setFavoriteData(data.filter(Boolean));
      } else {
        setFavoriteData([]);
      }
    };

    fetchAllFavoriteData();
  }, [favorites, fetchFavoriteData]);

  return (
    <div className="favorites">
      <Header />
      <BackButton />
      <h1 className="favorites-title">Favorite recipes</h1>
      {favorites.length === 0 && <p>No favorite recipes</p>}
      {favoriteData.length > 0 && (
        <ul className="favorites-list">
          {favoriteData.map((item) => (
            <li key={item.meals[0].idMeal} className="favorites-item">
              <RecipeListCard data={item.meals[0]} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
