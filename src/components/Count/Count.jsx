import React, { useContext } from 'react';
import './Count.scss';
import { GlobalContext } from '../../context/GlobalContext';

const Count = () => {
  const { count } = useContext(GlobalContext);
  return (
    <>
      <section className="recipe-count">
        <span className="recipe-count__number">{count}</span>
        <span className="recipe-count__label">
          {count === 0 ? 'recipes' : count === 1 ? 'recipe' : 'recipes'}
        </span>
      </section>
    </>
  );
};

export default Count;
