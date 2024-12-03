import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../styles/areaList.css";

const AreaList = () => {
  const url = `${BASE_URL}${KEY}${APIendpoints.allAreas}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="area">
      {data.meals.map((area) => (
        <li key={area.strArea} className="area-item">
          <Link
            className="area-item-link"
            to={`/area/${area.strArea.toLowerCase()}`}
          >
            {area.strArea}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AreaList;
