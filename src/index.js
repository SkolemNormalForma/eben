import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './pages/home';
import Members from './pages/members';
import Concerts from './pages/concerts';
import About from './pages/about';
import Music from './pages/music';
import Navbar from './components/navbar';
import './index.css';


class Fullpage extends React.Component {

  state = {
    mainPage: true
  };

  afterLoad(origin, destination, direction) {
    if (destination.anchor == "home") {
      this.setState ({
        mainPage: true
      });
    } else {
      this.setState ({
        mainPage: false
      });
    }

    if (destination.anchor == "music") {
      console.log(destination);
      console.log('beleptunk a zenebe');
      destination.item.querySelector("#myVideo").play();
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar isMainPage={this.state.mainPage} />
        <ReactFullpage
          afterLoad={this.afterLoad.bind(this)}
          anchors={["home", "about", "members", "music", "concerts"]}
          //fullpage options
          scrollingSpeed={1000} /* Options here */

          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>

              <div className="section">
                <Home></Home>
              </div>

              <div className="section">
                <About></About>
              </div>

              <div className="section">
                <Members></Members>
              </div>

              <div className="section">
                <Music></Music>
              </div>

              <div className="section">
                <Concerts></Concerts>
              </div>

            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<Fullpage />, document.getElementById('root'));