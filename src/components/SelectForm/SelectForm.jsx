import React, { useContext } from 'react';
import './SelectForm.scss';
import Button from '../Button/Button';
import Count from '../Count/Count';
import { arrowIcon } from '../../services/Services';
import { GlobalContext } from '../../context/GlobalContext';

const SelectForm = () => {
  const {
    healthOption,
    dietOption,
    handleDiet,
    handleHealth,
    handleSearch,
    getSearch,
    searchTerm,
  } = useContext(GlobalContext);

  // RENDER HEALT OPTION
  const renderHealth = () => {
    return (
      <>
        {healthOption.map((item) => (
          <option
            key={item.id}
            value={item.option}
            // onClick={() => handleHealth(item.option)}
          >
            {item.option}
          </option>
        ))}
      </>
    );
  };

  // RENDER DIET OPTION
  const renderDiet = () => {
    return (
      <>
        {dietOption.map((item) => (
          <option
            key={item.id}
            value={item.option}
            // onClick={() => handleDiet(item.option)}
          >
            {item.option}
          </option>
        ))}
      </>
    );
  };

  return (
    <>
      <Count />
      <form className="food-form" onSubmit={getSearch}>
        <input
          className="keyword-input"
          type="text"
          name="q"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Keyword"
        />
        <select
          name="health"
          onChange={handleHealth}
          style={{ backgroundImage: `url(${arrowIcon})` }}
        >
          <option disabled selected>
            HEALTH
          </option>
          {renderHealth()}
        </select>
        <select
          name="diet"
          onChange={handleDiet}
          style={{ backgroundImage: `url(${arrowIcon})` }}
        >
          <option disabled selected>
            DIET
          </option>
          {renderDiet()}
        </select>
        <Button
          name="search"
          type="submit"
          disabled={searchTerm === '' ? true : false}
        >
          Search
        </Button>
      </form>
    </>
  );
};

export default SelectForm;
