import { Link, Outlet } from "react-router-dom";

const Filters = () => {
  const filters = ["Categories", "Ingredients", "Area"];

  return (
    <>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter}>
            <Link to={filter.toLowerCase()}>{filter}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Filters;
