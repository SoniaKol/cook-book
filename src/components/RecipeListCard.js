import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import "../styles/recipeCard.css";

const RecipeListCard = ({ data }) => {
  const { strMeal, strMealThumb, idMeal } = data;
  return (
    <div className="card">
      <FavButton id={idMeal} />
      <Link to={`/recipe/${idMeal}`}>
        <img
          src={strMealThumb}
          alt={strMeal}
          style={{ width: "300px" }}
          className="card-img"
        />
        <h3 className="card-title">{strMeal}</h3>
      </Link>
    </div>
  );
};

export default RecipeListCard;
