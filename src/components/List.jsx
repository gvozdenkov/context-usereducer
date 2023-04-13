import React from 'react';
import { useIngredientContext } from '../contexts/IngredientContext';
import { Loading } from './Loading';

export const List = () => {
  // ! Используем isLoading для рендеринга прелоадера, если данные ещё не подгрузились
  const { ingredients, isLoading } = useIngredientContext();
  console.log(isLoading);

  if (isLoading) return <Loading />;

  const filtered = ingredients.filter(
    (ingredient) => ingredient.type === 'sauce'
  );

  return (
    <ul>
      {filtered.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};
