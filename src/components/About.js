import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './../styles/css/About.css';
import Me from './../img/ikram_2.png';
import torontoGeneral from './../img/timeline/torontogeneral.jpg'
import batupapan from './../img/timeline/batu-papan.jpg'
import sheffield from './../img/timeline/sheffield.jpg'
import edmonton from './../img/timeline/edmonton.jpg'
import toronto from './../img/timeline/toronto.jpg'


class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar/>
        <div className="about-container">
          <div className="wrapper row">
            <div className="img-wrapper col-lg-6">
              <img src={Me} />
            </div>
            <div className="info-wrapper col-lg-6">
              <h1 className="about-title">About Ikram</h1>
              <p>I am a full stack developer who enjoy develop scalable project, and create simple intuitive interfaces.</p>
              <p>Currently based in Toronto, Canada, I recently graduated from Brainstation Web Development Immersive Program that taught the latest web technologies and best practices. I constantly work on various projects after that drives me to learn more about other tools and frameworks</p>
              <p>In my free time, I play ultimate frisbee, devour all you can eat sushi, and looking for new ways to use technology to help non-profit cause.</p>
            </div>
          </div>
          <div className="timeline">
            <div className="time-header">
              <h2>My Story Thus Far</h2>
            </div>
            <div className="journey-container">
              <div className="middle-line">
              <div className="marker" id="first">
                  1988
                </div>
                <div className="marker" id="second">
                  1992
                </div>
                <div className="marker" id="third">
                  2009
                </div>
                <div className="marker" id="fourth">
                  2012
                </div>
                <div className="marker" id="fifth">
                  2016
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-year">
                  1988
                </div>
                <div className="journey-image sub">
                  <img src={torontoGeneral} />
                </div>
                <div className="journey-description sub">
                  <h3>Toronto, Canada</h3>
                  <p>Thanks to my mom, I was born in Toronto General Hospital. Apparently I was too eager to come out, my mom was hospitalized for a few months prior to my arrival (Love you Ibu!).</p>
                </div>
              </div>
              <div className="journey-item" id="gua-musang">
                <div className="journey-year">
                  1992
                </div>
                <div className="journey-image sub">
                  <img src={batupapan} />
                </div>
                <div className="journey-description sub">
                  <h3>Gua Musang, Malaysia</h3>
                  <p>I spent most of my childhood life in this sleepy little town. 
                  Surrounded by caves and rivers, I learned how to swim, outrun farm dogs, and even mining gold. Fun times :)</p>
                </div>
              </div>
              <div className="journey-item" id="sheffield">
                <div className="journey-year">
                  2009
                </div>
                <div className="journey-image sub">
                  <img src={sheffield} />
                </div>
                <div className="journey-description sub">
                  <h3>Sheffield, UK</h3>
                  <p>I fell in love with ultimate frisbee here, one of the (arguably)windiest place in the country. 
                  Also, got a degree in Chemical and Process Engineering here.</p>
                </div>
              </div>
              <div className="journey-item" id="edmonton">
                <div className="journey-year">
                  2012
                </div>
                <div className="journey-image sub">
                  <img src={edmonton} />
                </div>
                <div className="journey-description sub">
                  <h3>Edmonton, Alberta</h3>
                  <p>A leap of faith that I took in my adult life. Didn't know what had in store for me moving here,
                  I was fortunate to work in an obscure industry of spice business to be part of the process and production team. </p>
                </div>
              </div>
              <div className="journey-item" id="toronto">
                <div className="journey-year">
                  2016
                </div>
                <div className="journey-image sub">
                  <img src={toronto} />
                </div>
                <div className="journey-description sub">
                  <h3>Toronto, Canada</h3>
                  <p>There and back again. I'm here to find out what I have been missing out on. Bring it!</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
