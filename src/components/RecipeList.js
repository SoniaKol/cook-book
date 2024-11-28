import RecipeListCard from "./RecipeListCard";

const RecipeList = ({ data }) => {
  return (
    <ul>
      {data.meals &&
        data.meals.map((item) => (
          <li key={item.idMeal}>
            <RecipeListCard data={item} />
          </li>
        ))}
    </ul>
  );
};

export default RecipeList;
