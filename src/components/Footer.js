import React, { Component } from 'react';
import './../styles/css/Footer.css';
import Twitter from './../img/socialIcon/twitter.svg';
import GitHub from './../img/socialIcon/gitHub.svg';
import Linkedin from './../img/socialIcon/linked.svg';
import Email from './../img/socialIcon/email.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
         <div className="site-detail">
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
            <p>Copyright © Ikram Mustapha 2017 All Rights Reserved</p>
            </div>
      </div>
    );
  }
}

export default Footer;