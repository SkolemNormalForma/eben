
import React from 'react';
import '../index.css'

const Home = () => {
  return (
    <header class="header">
        <div class="overlay">
            <h1 class="subtitle">Isten hozott!</h1>
            <img src={require('../images/logo3.png')}></img>
        </div>  
        <div class="shape">
            <svg viewBox="0 0 1500 200">
                <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
            </svg>
        </div>
        <div class="mouse-icon"><div class="wheel"></div></div>
    </header>

  );
};

export default Home;