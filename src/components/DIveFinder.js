import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import RaisedButton from 'material-ui/RaisedButton';
import './../styles/css/DiveFinder.css';
import HomePic from './../img/diveFinder/diveFinder.png';
import Result from './../img/diveFinder/searchResult.png';
import Static from './../img/diveFinder/static.png';

const styles = {
  marginRight: 12,
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
};

class DiveFinder extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dive-container">
            <h1>Dive Finder</h1>
            <RaisedButton label="View Live" href="https://tranquil-shore-94097.herokuapp.com/" target="blank" style={styles} />
            <RaisedButton label="View Code" href="https://github.com/CrimsonPug/dive-finder" target="blank" style={styles} />
            <section className="whut-why">
                <h2>What and Why</h2>
                <p>I just want to pointed out that, this is my first real project! Sure, I've already done all the beginners project like 'Hello World' and stuff but this is my first real thought out that I came up with.</p>
                <p>I built this 5 weeks into learning how to code and I had to finish this in less than a week, so I didn't get to spend too much time on styling but more on functionality. It only has two features:-</p>
                <div className="objective-list">
                    <ul>
                        <li>User can search for diving spots by submitting the location</li>
                        <li>User can view the featured divespots based on the static data</li>
                    </ul>
                </div>
            </section>
            <section className="planning-phase">
                <h2>Planning Phase</h2>
                <div className="phase-one phase">
                    <h3>Phase One (Back End Configuration)</h3>
                    <p>The first thing I did was to play with the external API that I was using, in this case divesites.com (thanks guys!). I set up a basic Node server using Express library. So, the request would take in 
                    the latitude and the longitude of the user's query.</p>
                    <p>As a response, the API spits out a list of all the diving spots within 25 nautical miles of the coordinates that was submitted earlier. Once I got that working, now it is a matter sending it to the client side.</p>
                </div>
                <div className="phase-two phase">
                    <h3>Phase Two (Data Visualisation)</h3>
                    <p>Normally, people wouldn't know the latitude and longitude of a place, so I needed to find a way to translate their input into coordinates. Thanks to Google Maps API, I have managed to use their tool to help me with this. So, I had to configure
                    making an API call on the client side and send to the response straight to the back end</p>
                    <p>On a successful response of the two API calls, I needed to visualize the data back to the front end. I can easily put in a listed item (and I did) but it would be more intuitive to 
                     put it on a map. Therefore, I made another call to Google Maps API to point out all the coordinates of all the diving spots around.</p>
                </div>
                <div className="phase-three phase">
                    <h3>Phase Three (Static Data)</h3>
                    <p>Probably the easiest part of all, was rendering the static data that I stored as an array of objects on the back-end. I was learning about using MVC architecture at this point
                    so in this case my Model is the file I placed all the static data, Controller is the logic that I have on how to render it, and as View I use EJS templating to render them out.</p>
                </div>
            </section>
            <section className="how-to-use">
                <h2>This is how it works</h2>
                <div className="in-a-hurry">
                    <div className="home pic">
                        <p>As you go to the site, this is the home page should look like. Put in the location and click Find Dive Spots.</p>
                        <img src={HomePic} />
                    </div>
                    <div className="submit pic">
                        <p>This is how the results are rendered, by clicking the individual flags it'll show the name of that dive spots.</p>
                        <img src={Result} />
                    </div>
                    <div className="edit pic">
                        <p>Using EJS templates, this is how the static data is displayed.</p>
                        <img src={Static} />
                    </div>
                </div>
            </section>
            <section className="challenges">
                <h2>Challenges</h2>
                <div className="challenge-one">
                    <h3>Understanding how the API works</h3>
                    <p>One of the biggest challenge that I faced during this period is understanding the Google Maps API documentations. I was still new with JavaScript (still am) and trying to understand their code was pretty hard for me at the time. And even trying 
                    integrate it with your codes was even more challenging. However, I've got plenty of help for the TAs at Brainstation to help me through it. </p>
                </div>
                <div className="challenge-two">
                    <h3>Getting the APIs to play nicely</h3>
                    <p>As you might recall, I'm making 3 different API calls for a single a search. In the beginning, chaining these events was a nightmare especially for a beginner like me then. The biggest problem that I had was trying
                    to send the list of all the diving spots back to the client side. The way I have set it up was that, as I render the search result page using EJS template, I've also linked up the JavaScript file to that HTML file.</p>
                    <p>So this set of data needed to pass through 2 files before I get to render it and I spent the longest time to get it working. Again thanks to the TAs, I managed to get it working in the end.</p>
                </div>
                <div className="challenge-three">
                    <h3>Deployment</h3>
                    <p>This is more like an ongoing bug that I haven't got the chance to debug yet. I have deployed this project on Heroku and for some reason it doesn't show the map on the search page, but still give out the result in the listed items.</p>
                    <p>If you have the chance, clone the repo and run it on your local server and it will work just fine. Will update this real soon.</p>
                </div>
            </section>
            <section className="moving-forward">
                <h2>Moving Forward!</h2>
                <p>Given the chance, I would like to further polished this application. Here are some of the things I would like to work on </p>
                <div className="future-features">
                    <ul>
                        <li>Better user interface</li>
                        <li>Better error handling, especially when there's no diving spots around</li>
                        <li>Additional API call, as the user click any specific dive spots, it'll show the weather of that area</li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DiveFinder;