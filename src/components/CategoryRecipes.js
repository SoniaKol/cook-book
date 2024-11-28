import { useParams } from "react-router-dom";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import RecipeList from "./RecipeList";
import BackButton from "./BackButton";

const CategoryRecipes = () => {
  const { category } = useParams();

  const url = `${BASE_URL}${KEY}${APIendpoints.filterByCategory}${category}`;

  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      <Header />
      <BackButton />
      <h1>Recipes from category: {category}</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <RecipeList data={data} />}
    </div>
  );
};

export default CategoryRecipes;
