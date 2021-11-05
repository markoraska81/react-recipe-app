import React, { useContext } from 'react';
import './Recipes.scss';
import { GlobalContext } from '../../context/GlobalContext';
import RecipeItem from '../RecipeItem/RecipeItem';
import Spinner from '../Spinner/Spinner';

const Recipes = () => {
  const { recipes, loading, count, handleDetail } = useContext(GlobalContext);

  // RENDER RECIPES
  const renderRecipes = () => {
    return (
      <>
        {recipes.map((item) => (
          <RecipeItem
            key={item.id}
            id={item.id}
            label={item.label}
            img={item.image}
            calories={item.calories}
            dishType={item.dishType}
            mealType={item.mealType}
            ingredients={item.ingredientsLines}
            cuisineType={item.cuisineType}
            handleDetail={handleDetail}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="recipes">
        {loading ? (
          <Spinner />
        ) : (
          <div className="recipes-box">
            {count === 0 ? null : renderRecipes()}
          </div>
        )}{' '}
      </div>
    </>
  );
};

export default Recipes;
