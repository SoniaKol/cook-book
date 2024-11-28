import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filters from "./components/Filters";
// import SearchResult from "./components/SearchResult";
// import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchProvider> */}
      <Search />
      <Filters />
      {/* </SearchProvider> */}
    </div>
  );
}

export default App;
