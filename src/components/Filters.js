import { NavLink, Outlet } from "react-router-dom";
import "../styles/filters.css";

const Filters = () => {
  const filters = ["Categories", "Ingredients", "Area"];

  return (
    <>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter} className="filters-item">
            <NavLink
              to={filter.toLowerCase()}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#ffdb63" : "inherit",
                };
              }}
            >
              {filter}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Filters;
