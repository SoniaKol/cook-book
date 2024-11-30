import { createContext, useState } from "react";

const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <RecipeContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
