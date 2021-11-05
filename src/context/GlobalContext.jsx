import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { optionDiet, optionHealth, recipeData } from '../services/Services';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { REACT_APP_API_ID, REACT_APP_API_KEY } = process.env;
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [healthOption, setHealthOption] = useState(optionHealth);
  const [dietOption, setDietOption] = useState(optionDiet);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [health, setHealth] = useState('');
  const [diet, setDiet] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [recipeDetail, setRecipeDetail] = useState(recipeData);

  useEffect(() => {
    fetchOption();
    fetchRecipes();
  }, [query]);

  // FETCH OPTION
  const fetchOption = () => {
    setDietOption(optionDiet);
    setHealthOption(optionHealth);
  };

  // FETCH RECIPES
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      let url2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}&diet=${diet}&health=${health}`;

      const req = await axios(url2);
      const data = req.data;
      let newRecipes = [];
      data.hits.forEach((item, index) => {
        let singleRecipe = {
          id: new Date().getTime() + index,
          calories: item.recipe.calories,
          cuisineType: item.recipe.cuisineType,
          dietLabels: item.recipe.dietLabels,
          dishType: item.recipe.dishType,
          ingredientLines: item.recipe.ingredientLines,
          mealType: item.recipe.mealType,
          label: item.recipe.label,
          image: item.recipe.image,
        };
        newRecipes.push(singleRecipe);
      });
      setRecipes(newRecipes);
      setCount(data.count);
      if (data.count === 0) {
        setModal(true);
      }
    } catch {
      console.log('Error request');
    }
    setLoading(false);
  };

  console.log(recipes);

  // MENU TOOGLE
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // HANDLE DIET
  const handleDiet = (e) => {
    setDiet(e.target.value);
  };

  // HANDLE HEALTH
  const handleHealth = (e) => {
    setHealth(e.target.value);
  };

  // HANDLE SEARCH
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // GET SEARCH
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearchTerm('');
  };
  // GET ITEM
  const getItem = (id) => {
    const recipe = recipes.find((item) => item.id === id);
    return recipe;
  };

  // NANDLE DETAIL
  const handleDetail = (id) => {
    const item = getItem(id);
    setRecipeDetail(item);
  };

  // OPEN, CLOSE MODAL
  const openModal = () => {
    // const item = getItem(id)
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        menuToggle,
        modal,
        openModal,
        closeModal,
        dietOption,
        healthOption,
        searchTerm,
        getSearch,
        query,
        handleDiet,
        handleHealth,
        handleSearch,
        recipes,
        recipeDetail,
        handleDetail,
        loading,
        count,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7725cb29&app_key=ec1ff502b31fa9e60b0aaaf8f4e99281&diet=balanced&health=vegan
// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7725cb29&app_key=ec1ff502b31fa9e60b0aaaf8f4e99281&diet=vegan&health=balanced
