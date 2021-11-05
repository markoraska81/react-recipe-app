import React from 'react';
import './RecipeItem.scss';
import { Link } from 'react-router-dom';

const RecipeItem = ({ id, label, img, calories, handleDetail }) => {
  return (
    <>
      <div className="recipe-item">
        <div className="recipe-item__heading">
          <img src={img} alt={label} />
        </div>
        <div className="recipe-item__body">
          <h3 className="label">{label}</h3>
          <p className="calories">
            Calories: <br /> {calories.toFixed(0)} kcal
          </p>
          <Link
            to={`/recipe/${id}`}
            onClick={() => handleDetail(id)}
            className="btn-recipe"
          >
            recipe
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
