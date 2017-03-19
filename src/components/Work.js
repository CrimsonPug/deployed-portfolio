import React, { Component } from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router';
import UltimateScore from './../img/project/ultimateScore.png';
import Independence from './../img/project/dementiaHack.png';
import Dive from './../img/project/dive-finder.png';
import './../styles/css/Work.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Me from './../img/ikram_2.png';
import Footer from './Footer';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <NavBar />
        <div className="work-container row">
          <div className="ultimate-score col-lg-6 col-sm-12">
            <Link to="/ultimate-score">
            <Card>
              <CardHeader
                title="Ikram Mustapha"
                subtitle="FullStack Developer"
                avatar={Me}
              />
              <CardMedia
                overlay={<CardTitle title="Ultimate Score" subtitle="React,Node,Express,PostgreSQL" />}
              >
                <img src={UltimateScore} />
              </CardMedia>
              <CardTitle title="Brainstation" subtitle="Dec 2016" />
              <CardText>
                Ultimate Score is a fresh new way to keep track of the goal, scorer, and the assist at any particular point. It is initially tailored for ultimate frisbee but is also suitable for any sport that use similar scoring system like soccer.
              </CardText>
              <CardActions>
                <FlatButton label="View Live" href="http://35.163.21.23/" target="blank"/>
                <FlatButton label="Code" href="https://github.com/CrimsonPug/ultimate-score" target="blank" />
              </CardActions>
            </Card>
            </Link>
          </div>
          <div className="independence col-lg-6 col-sm-12">
            <Card>
              <CardHeader
                title="Ikram Mustapha"
                subtitle="Front End Developer"
                avatar={Me}
              />
              <CardMedia
                overlay={<CardTitle title="Independence Banking" subtitle="React,Material-UI,SASS,Node,MongoDB" />}
              >
                <img src={Independence} />
              </CardMedia>
              <CardTitle title="Dementia Hack" subtitle="March 2017" />
              <CardText>
                A shared finance management application between a person with dementia(PWD) and a trusted caregiver. Depending on the cognitive ability of the user, the application renders a simpler dashboard interface for PWD and notification is invoked for every transaction is being done on the other party.
              </CardText>
              <CardActions>
                <FlatButton label="View Live" href="https://sharedfinance.herokuapp.com" target="blank" />
                <FlatButton label="Code" href="https://github.com/marc22alain/shared-finance" target="blank" />
              </CardActions>
            </Card>
          </div>
          <div className="dive-finder col-lg-6 col-sm-12">
            <Card>
              <CardHeader
                title="Ikram Mustapha"
                subtitle="FullStack Developer"
                avatar={Me}
              />
              <CardMedia
                overlay={<CardTitle title="Dive-Finder" subtitle="EJS,jQuery,Node,Google Maps API" />}
              >
                <img src={Dive} />
              </CardMedia>
              <CardTitle title="Brainstation" subtitle="November 2016" />
              <CardText>
                Utilizing Google Maps API on the client side, the user is able to search for scuba diving sites within 25 nautical miles of user's location input. This data visualization is handled using Node to call for external API and passed on the client side using EJS templating.
              </CardText>
              <CardActions>
                <FlatButton label="View Live" href="https://tranquil-shore-94097.herokuapp.com/" target="blank"/>
                <FlatButton label="Code" href="https://github.com/CrimsonPug/dive-finder" target="blank" />
              </CardActions>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Work;
