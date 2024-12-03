import { useParams } from "react-router-dom";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import useFetch from "../hooks/useFetch";
import Header from "./Header";
import RecipeList from "./RecipeList";
import BackButton from "./BackButton";
import "../styles/recipeList.css";

const AreaRecipes = () => {
  const { area } = useParams();
  const url = `${BASE_URL}${KEY}${APIendpoints.filterByArea}${area}`;

  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      <Header />
      <BackButton />
      <h1 className="title">Recipes from area: {area.toUpperCase()}</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default AreaRecipes;
