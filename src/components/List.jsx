import React from 'react';
import { useIngredientContext } from '../contexts/IngredientContext';
import { Loading } from './Loading';

export const List = () => {
  const { ingredients, isLoading } = useIngredientContext();

  if (isLoading) return <Loading />;

  const filtered = ingredients.filter((ingredient) => ingredient.type === 'sauce');

  return (
    <ul>
      {filtered.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};
