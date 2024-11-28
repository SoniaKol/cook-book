import { Link } from "react-router-dom";

const RecipeListCard = ({ data }) => {
  const { strMeal, strMealThumb, idMeal } = data;
  return (
    <Link to={`/recipe/${idMeal}`}>
      <div className="card">
        <img src={strMealThumb} alt={strMeal} style={{ width: "300px" }} />

        <h3>{strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeListCard;
