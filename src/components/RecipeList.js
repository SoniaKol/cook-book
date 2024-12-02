import RecipeListCard from "./RecipeListCard";
import "../styles/recipeList.css";

const RecipeList = ({ data }) => {
  return (
    <ul className="recipe-list">
      {data.meals &&
        data.meals.map((item) => (
          <li key={item.idMeal} className="recipe-list-item">
            <RecipeListCard data={item} />
          </li>
        ))}
    </ul>
  );
};

export default RecipeList;
