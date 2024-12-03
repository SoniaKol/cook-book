import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";
import Header from "./Header";
import BackButton from "./BackButton";
import FavButton from "./FavButton";
import YoutubeLogo from "../assets/Youtube_logo.png";
import "../styles/recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = `${BASE_URL}${KEY}${APIendpoints.lookupById}${id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (!data || !data.meals || data.meals.length === 0) {
    return <p>Recipe not found</p>;
  }

  const {
    strMeal: title,
    strMealThumb: img,
    strArea: country,
    strCategory: category,
    strInstructions: instructions,
    strYoutube: video,
  } = data.meals[0];

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (data.meals[0][`strIngredient${i}`]) {
      ingredients.push(
        `${data.meals[0][`strIngredient${i}`]}: ${
          data.meals[0][`strMeasure${i}`]
        }`
      );
    }
  }

  const description = instructions.trim().split("\r\n");

  return (
    <div className="recipe">
      <Header />
      <BackButton />

      <div className="recipe-title-wrap">
        <h1 className="recipe-title">{title}</h1>
        <FavButton id={id} />
      </div>
      <img src={img} alt={title} className="recipe-img" />
      <div className="recipe-category">
        <Link
          className="recipe-link"
          to={`/categories/${category.toLowerCase()}`}
        >
          {category}
        </Link>
        <Link className="recipe-link" to={`/area/${country.toLowerCase()}`}>
          {country}
        </Link>
      </div>

      <ul className="recipe-ingredients-list">
        {ingredients.map((item, index) => (
          <li className="recipe-ingredients-item" key={index}>
            <label className="recipe-ingredients-label">
              <input
                type="checkbox"
                className="visually-hidden recipe-ingredients-checkbox"
              />
              <span className="checkbox-span"></span>
              <p>{item}</p>
            </label>
          </li>
        ))}
      </ul>
      <ul className="recipe-description-list">
        {description.map((item, index) => (
          <li className="recipe-description-item" key={index}>
            {item}
          </li>
        ))}
      </ul>

      {video && (
        <a href={video} target="blank" className="recipe-video-link">
          <img src={YoutubeLogo} alt="youtube logo" />
          Watch video on YouTube
        </a>
      )}
    </div>
  );
};

export default Recipe;
