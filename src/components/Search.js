import { useNavigate } from "react-router-dom";

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
      <form onSubmit={formSubmitHandler}>
        <label>
          <input type="text" placeholder="Search..." name="search-input" />
        </label>
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
