import heartIcon from "../assets/heart-regular.svg";
import favoriteHeartIcon from "../assets/heart-solid.svg";
import { useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import "../styles/favButton.css";

const FavButton = ({ id }) => {
  const [favorites, setFavorites] = useContext(RecipeContext);
  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(id) ? true : false
  );

  const addToFavoriteHandler = () => {
    if (!isFavorite) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <button className="fav-button" onClick={addToFavoriteHandler}>
      <img
        src={isFavorite ? favoriteHeartIcon : heartIcon}
        alt="heart"
        className="img-fav"
      />
    </button>
  );
};

export default FavButton;
