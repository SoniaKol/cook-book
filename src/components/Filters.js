const Filters = () => {
  const filters = ["Categories", "Ingredients", "Area"];
  return (
    <ul className="filters">
      {filters.map((filter) => (
        <li key={filter}>
          <button>{filter}</button>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
