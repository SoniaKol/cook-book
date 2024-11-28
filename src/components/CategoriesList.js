import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const url = `${BASE_URL}${KEY}${APIendpoints.allCategories}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.categories.map((category) => (
        <li key={category.idCategory}>
          <Link to={`/categories/${category.strCategory.toLowerCase()}`}>
            <h2>{category.strCategory}</h2>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              style={{ width: "150px" }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
