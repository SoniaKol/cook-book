import { NavLink } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="favorites">
      <NavLink to="/">Back</NavLink>
      <h1>Favorite recipes</h1>
    </div>
  );
};

export default Favorites;
