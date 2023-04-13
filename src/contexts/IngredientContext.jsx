import { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch/useFetch';

const IngredientContext = createContext();

export const useIngredientContext = () => {
  const context = useContext(IngredientContext);

  if (context === undefined) {
    throw new Error(
      'You try to use useIngredientContext outside of its provider!'
    );
  }

  return context;
};

export const IngredientContextProvider = ({ children }) => {
  const { data, error, isLoading, setEndPoint } = useFetch({
    endpoint: 'posts',
  });
  const ingredients = data ? data : null;
  console.log(ingredients);

  return (
    <IngredientContext.Provider value={{ ingredients, isLoading, setEndPoint }}>
      {children}
    </IngredientContext.Provider>
  );
};
