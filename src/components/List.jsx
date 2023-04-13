import React from 'react';

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};
