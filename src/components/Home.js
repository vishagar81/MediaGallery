import React from 'react';
import { Link } from 'react-router-dom';

// Home
const Home = () => (
  <div className="jumbotron center">
    <h1 className="lead">Welcome Home </h1>
    <div>
      <Link to="gallery">
        <button className="btn btn-lg btn-primary"> Visit Gallery</button>
      </Link>
    </div>
  </div>
);

export default Home;