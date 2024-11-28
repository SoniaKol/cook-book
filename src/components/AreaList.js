import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const AreaList = () => {
  const url = `${BASE_URL}${KEY}${APIendpoints.allAreas}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.meals.map((area) => (
        <li key={area.strArea}>
          <Link to={`/area/${area.strArea.toLowerCase()}`}>
            <h2>{area.strArea}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AreaList;
