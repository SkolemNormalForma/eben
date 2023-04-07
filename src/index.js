import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './pages/home';
import Concerts from './pages/concerts';
import About from './pages/about';

import './index.css';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home></Home>
          </div>

          <div className="section">
            <About></About>
          </div>

          <div className="section">
            <Concerts></Concerts>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('root'));