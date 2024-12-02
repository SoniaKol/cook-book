import { useNavigate } from "react-router-dom";
import "../styles/search.css";

const Search = () => {
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const searchValue = encodeURIComponent(
      e.target[0].value.trim().toLowerCase()
    ).replace("%20", "_");

    if (searchValue === "") {
      return;
    }

    navigate(`/search/${searchValue}`);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className="search-form">
        <label className="search-label">
          <input
            type="text"
            placeholder="Search..."
            name="search-input"
            className="search-input"
          />
        </label>
        <button className="search-button">Search</button>
      </form>
    </>
  );
};

export default Search;
