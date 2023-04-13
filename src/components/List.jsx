import React from 'react';
import { useIngredientContext } from '../contexts/IngredientContext';

export const List = () => {
  const ingredients = useIngredientContext();
  const filtered = ingredients.filter(ingredient => ingredient.type === 'sauce');

  return (
    <ul>
      {filtered.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};
