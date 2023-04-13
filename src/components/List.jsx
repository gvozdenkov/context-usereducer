import React from 'react';
import { useIngredientContext } from '../contexts/IngredientContext';
import { Loading } from './Loading';

export const List = () => {
  const { ingredients, isLoading, setEndPoint } = useIngredientContext();

  if (isLoading) return <Loading />;

  const filtered = ingredients.filter(
    (ingredient) => ingredient.type === 'sauce'
  );

  const postsOnClickHandler = () => {
    setEndPoint('posts');
  };
  const usersOnClickHandler = () => {
    setEndPoint('users');
  };

  return (
    <>
      <button onClick={postsOnClickHandler}>posts</button>
      <button onClick={usersOnClickHandler}>users</button>
      <ul>
        {ingredients.map((item, index) => {
          return <li key={index}>{item.id}</li>;
        })}
      </ul>
    </>
  );
};
