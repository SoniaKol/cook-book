import { Link } from "react-router-dom";
import FavButton from "./FavButton";

const RecipeListCard = ({ data }) => {
  const { strMeal, strMealThumb, idMeal } = data;
  return (
    <div className="card">
      <FavButton id={idMeal} />
      <Link to={`/recipe/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} style={{ width: "300px" }} />

        <h3>{strMeal}</h3>
      </Link>{" "}
    </div>
  );
};

export default RecipeListCard;
