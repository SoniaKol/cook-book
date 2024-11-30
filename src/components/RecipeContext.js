import { createContext } from "react";
import useLocalStorage from "../hooks/useLocaleStorage";

const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  return (
    <RecipeContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
