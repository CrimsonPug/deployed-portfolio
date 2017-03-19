import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './../styles/css/DementiaHack.css';

class IndependenceBanking extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dementia">
            <h1>Under Construction, Coming Soon!</h1>
            <img src="https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default IndependenceBanking;