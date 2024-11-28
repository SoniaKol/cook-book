import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";

const Recipe = () => {
  const nav = useNavigate();
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

  return (
    <div>
      <button onClick={() => nav(-1)}>Back</button>

      <h1>{title}</h1>
      <img src={img} alt={title} style={{ width: "200px" }} />
      <p>{category}</p>
      <p>{country}</p>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{instructions}</p>

      {video && (
        <a href={video} target="blank">
          Video
        </a>
      )}
    </div>
  );
};

export default Recipe;
