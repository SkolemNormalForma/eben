import React from "react";
import '../../index.css'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.isMainPage ? 'navbarClassWhite' : 'navbarClassBlack'}>
        <a href="#home">Főoldal</a>
        <a href="#about">Rólunk</a>
        <a href="#members">Tagok</a>
        <a href="#music">Zenénk</a>
        <a href="#concerts">Események</a>
      </div>
    );
  }
};