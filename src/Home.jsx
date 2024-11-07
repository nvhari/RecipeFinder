// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Flavor Haven</h1>
        <p>Your ultimate destination for delicious recipes from around the world.</p>
        <Link to="/recipes" className="explore-button">Explore Recipes</Link>
      </section>

      <section className="intro">
        <h2>Discover Amazing Recipes</h2>
        <p>From traditional favorites to exotic dishes, explore a variety of recipes that will tantalize your taste buds. Start cooking something new today!</p>
      </section>

    
    </div>
  );
};

export default Home;
