import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../styles/categoriesList.css";

const CategoriesList = () => {
  const url = `${BASE_URL}${KEY}${APIendpoints.allCategories}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="categories">
      {data.categories.map((category) => (
        <li key={category.idCategory} className="categories-item">
          <Link
            className="categories-item-link"
            to={`/categories/${category.strCategory.toLowerCase()}`}
          >
            <img
              className="categories-item-image"
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />
            <h2 className="categories-item-title">{category.strCategory}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
