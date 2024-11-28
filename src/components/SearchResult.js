import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import RecipeListCard from "./RecipeListCard";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

const SearchResult = () => {
  const navigate = useNavigate();
  const { searchValue } = useParams();
  const url = `${BASE_URL}${KEY}${APIendpoints.searchByName}${searchValue}`;
  const urlFirstLetter = `${BASE_URL}${KEY}${APIendpoints.searchByLetter}${searchValue}`;

  const { data, loading, error } = useFetch(
    searchValue === 1 ? urlFirstLetter : url
  );

  return (
    <div>
      <Header />
      <button onClick={() => navigate(-1)}>Back</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data.meals === null && <p>No results found</p>}
      <ul>
        {data.meals &&
          data.meals.map((item) => (
            <li key={item.idMeal}>
              <RecipeListCard data={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResult;
