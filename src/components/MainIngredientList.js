import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import { Link } from "react-router-dom";

const MainIngredientList = () => {
  const url = `${BASE_URL}${KEY}${APIendpoints.allIngredients}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.meals.map((ingredient) => (
        <li key={ingredient.idIngredient}>
          <Link to={`/ingredients/${ingredient.strIngredient.toLowerCase()}`}>
            {ingredient.strIngredient}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainIngredientList;