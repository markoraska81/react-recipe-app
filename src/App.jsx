import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';

// PAGES
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipe/:id" exact component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;
