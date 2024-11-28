import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import { useParams } from "react-router-dom";
import Header from "./Header";
import RecipeList from "./RecipeList";
import BackButton from "./BackButton";

const SearchResult = () => {
  const { searchValue } = useParams();
  const url = `${BASE_URL}${KEY}${APIendpoints.searchByName}${searchValue}`;
  const urlFirstLetter = `${BASE_URL}${KEY}${APIendpoints.searchByLetter}${searchValue}`;

  const { data, loading, error } = useFetch(
    searchValue === 1 ? urlFirstLetter : url
  );

  return (
    <div>
      <Header />
      <BackButton />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data.meals === null && <p>No results found</p>}
      {data.meals && <RecipeList data={data} />}
    </div>
  );
};

export default SearchResult;
