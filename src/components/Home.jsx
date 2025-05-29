import React from 'react';
import Navbar from './Navbar'; 
import "../assets/styles/home.css"; 
import bgImage from '../assets/images/home.jpg'; 

const Home = () => {
  return (
    <>
     
      <Navbar />

    
      <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="content">
          <img src={bgImage} alt="Library" /> 
          <h1>Welcome to the Library App</h1>
          <p>Your personal library at your fingertips. Browse, read, and manage your favorite books from anywhere.</p>

          {/* Brief about app features */}
          <div className="features">
            <h2>What You Can Do:</h2>
            <ul>
              <li>Read a vast collection of books.</li>
              <li>Add to cart your favorite books </li>
              <li>Track your reading progress and manage your library efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
