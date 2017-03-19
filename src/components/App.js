import React, { Component } from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router';
import './../styles/css/App.css';
import Twitter from './../img/socialIcon/twitter.svg';
import GitHub from './../img/socialIcon/gitHub.svg';
import Linkedin from './../img/socialIcon/linked.svg';
import Email from './../img/socialIcon/email.svg';

const fun = ['frisbee chaser', 'casual scuba diver','sloppy sushi maker','Hufflepuff advocate','pizza destroyer']
    let prevWord;
    let currentWord;

class App extends Component {
    constructor(){
    super();
    this.state = {
      role: 'frisbee chaser'
    }
  }
  componentDidMount(){
   
    setInterval(()=>{
       prevWord = currentWord;
      
      currentWord === fun[Math.floor(Math.random() * ((fun.length-1) - 0 + 1)) + 0]

      if (prevWord === currentWord){
            currentWord = fun[Math.floor(Math.random() * ((fun.length-1) - 0 + 1)) + 0];
        };
      console.log(currentWord);
      this.setState({
        role: currentWord
      })
    },1000);
  }
  render() {
     const role = this.state.role;
    return (
      <div className="App">
        <div className="home-wrapper">
          <div className="inner-container">
            <h2>Ikram <span id="skinny">Mustapha</span></h2>
            <div className="social-container">
              <ul>
                <li>
                  <a target="blank" href="https://twitter.com/IkramTM">
                    <img src={Twitter} />
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://github.com/CrimsonPug">
                    <img src={GitHub} />
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://www.linkedin.com/in/ikram-mustapha/">
                    <img src={Linkedin} />
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="mailto:ikram.tuan.mustapha@gmail.com" target="_top" >
                    <img src={Email} />
                  </a>
                </li>
              </ul>
            </div>
            <p className="home-title">A web developer,</p>
            <p className="home-title">{this.state.role}</p>
            <nav className="nav-homepage">
              <ul>
                <li>
                  <Link to="/about">
                  About Me
                  </Link>
                </li>
                <li>
                  <Link to="/work">
                    Work
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
