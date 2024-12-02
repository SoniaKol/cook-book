import { Link, Outlet } from "react-router-dom";
import "../styles/filters.css";

const Filters = () => {
  const filters = ["Categories", "Ingredients", "Area"];

  return (
    <>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter} className="filters-item">
            <Link to={filter.toLowerCase()}>{filter}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Filters;
