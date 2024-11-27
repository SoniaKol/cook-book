import { BASE_URL, KEY, APIendpoints } from "../data/APIdata";

const Search = () => {
  const fetchSearchingData = async (url) => {
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const searchValue = encodeURIComponent(
      e.target[0].value.trim().toLowerCase()
    ).replace("%20", "_");

    if (searchValue === "") {
      return;
    }

    if (searchValue.length === 1) {
      fetchSearchingData(
        `${BASE_URL}${KEY}/${APIendpoints.searchByLetter}${searchValue}`
      );
      console.log("search by letter");
    } else {
      fetchSearchingData(
        `${BASE_URL}${KEY}/${APIendpoints.searchByName}${searchValue}`
      );
      console.log("search by name");
    }

    console.log(searchValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="">
        <input type="text" placeholder="Search..." />
      </label>
      <button>Search</button>
    </form>
  );
};

export default Search;
