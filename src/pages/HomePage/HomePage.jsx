import React, { useContext } from 'react';
import './HomePage.scss';
import Title from '../../components/Title/Title';
import SelectForm from '../../components/SelectForm/SelectForm';
import Recipes from '../../components/Recipes/Recipes';
import Modal from '../../components/Modal/Modal';
import { GlobalContext } from '../../context/GlobalContext';

const Home = () => {
  const { closeModal } = useContext(GlobalContext);
  return (
    <>
      <section className="home-page">
        <div className="home-page__heading">
          <Title title="search recipes" />
          <SelectForm />
        </div>
        <div className="home-page__body">
          <Recipes />
          <Modal>
            <h2>no recipes</h2>
            <p style={{ cursor: 'pointer' }} onClick={closeModal}>
              <i className="far fa-window-close"></i>
            </p>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Home;
