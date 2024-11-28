import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";
// import SearchResult from "./components/SearchResult";
// import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchProvider> */}
      <Search />
      <Main />
      {/* </SearchProvider> */}
    </div>
  );
}

export default App;
