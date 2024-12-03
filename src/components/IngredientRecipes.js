import { useParams } from "react-router-dom";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import RecipeList from "./RecipeList";
import BackButton from "./BackButton";
import "../styles/recipeList.css";

const IngredientRecipes = () => {
  const { ingredient } = useParams();
  const url = `${BASE_URL}${KEY}${APIendpoints.filterByIngredient}${ingredient}`;

  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      <Header />
      <BackButton />
      <h1 className="title">Recipes with {ingredient}</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default IngredientRecipes;
