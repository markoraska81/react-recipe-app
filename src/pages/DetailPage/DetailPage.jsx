import React, { useContext } from 'react';
import './DetailPage.scss';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const DetailPage = () => {
  const { recipeDetail } = useContext(GlobalContext);
  const {
    image,
    label,
    cuisineType,
    ingredientLines,
    mealType,
    calories,
    dishType,
  } = recipeDetail;
  return (
    <>
      <section className="detail-page">
        <div className="detail-page__box">
          <div className="detail-page__heading">
            <img src={image} alt={label} />
            <Link to="/">
              <p>Back</p>
            </Link>
          </div>
          <div className="detail-page__body">
            <h3 className="label">
              <span>Recipe name:</span> {label}
            </h3>
            <p className="calories">
              <span>Calories:</span> {calories.toFixed(0)} kcal
            </p>
            <div className="dish-type">
              <span>Dish type:</span> {dishType}
            </div>
            <div className="meal-type">
              <span>meal type:</span> {mealType}
            </div>
            <div className="cuisine-type">
              <span>cuisine type:</span> {cuisineType}
            </div>
            <div className="ingredients">
              <span>ingredients:</span>
              <div>
                {ingredientLines.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
