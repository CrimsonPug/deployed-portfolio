import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './../styles/css/About.css';
import Me from './../img/ikram_2.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar />
        <div className="about-container row">
          <div className="img-wrapper col-lg-6">
            <img src={Me} />
          </div>
          <div className="info-wrapper col-lg-6">
            <h1 className="about-title">About Ikram</h1>
            <p>I am a full stack developer who enjoys developing scalable projects, and creating simple intuitive interfaces.</p>
            <p>Currently based in Toronto, Canada, I recently graduated from the BrainStation Web Development Immersive program that taught the latest web technologies and best practices. I constantly work on projects that drive me to learn more about other cutting edge tools and frameworks.</p>
            <p>In my free time, I play ultimate frisbee, devour all you can eat sushi, and look for new ways to use technology to help non-profit causes.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
