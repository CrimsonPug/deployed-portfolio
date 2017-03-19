import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import RaisedButton from 'material-ui/RaisedButton';
import './../styles/css/UltimateScore.css';
import HomePic from './../img/ultimatePic/match/home.png';
import Submit from './../img/ultimatePic/match/submitScore.png';
import Edit from './../img/ultimatePic/match/edit.png';
import Delete from './../img/ultimatePic/match/delete.png';
import Dashboard from './../img/ultimatePic/signup/dashboard.png';
import Roster from './../img/ultimatePic/signup/addPlayer.png';

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

class UltimateScore extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ultimate-container">
            <h1>Ultimate Score</h1>
            <RaisedButton label="View Live" href="http://35.163.21.23/" target="blank" style={styles} />
            <RaisedButton label="View Code" href="https://github.com/CrimsonPug/ultimate-score" target="blank" style={styles} />
            <section className="whut-why">
                <h2>What and Why</h2>
                <p>So, let's start with how or why did make this application. 
                    Before I left Edmonton, I was part of <a href="#">Canadian Ultimate Championship</a> organizing committee, 
                    and one my roles is to update the score on the event's website. The way it worked was that the volunteer scorekeepers
                    would track the statistic and at the end of the game the scoresheet was submitted to the head scorekeeper and after verified, 
                    I would key in that data into the database. Not too bad right?</p>
                <p> But with competition at national level like this one
                    with average 40 games per day, this task can be quite daunting. I saw the opportunity on how to improve this and I decided
                    there could be a way if the volunteer themselves can upload the statistic on their own devices. Just to recap, below were the things I was trying to achieve</p>
                <div className="objective-list">
                    <ul>
                        <li>Scorekeeper can submit the score, the scorer and the assist</li>
                        <li>Scorekeeper can edit the score, the scorer and the assist</li>
                        <li>Scorekeeper can delete any of the data</li>
                    </ul>
                </div>
            </section>
            <section className="planning-phase">
                <h2>Planning Phase</h2>
                <p>I had 3 weeks to finish the project, therefore I needed cut it up into smaller chunks to make it more manageable not to be too overwhelmed at the same time.</p>
                <div className="phase-one phase">
                    <h3>Phase One (Single Match Application)</h3>
                    <p>This is where I built the main component of the project. All the logic for submitting the data, edit, and delete were develop in this phase. 
                    I played a lot with the lifecycle components here to get the logic working and in this period I learned React a lot deeper by facing problems that I haven't encounter before</p>
                    <p>In this period also, spent a lot of time (first half of the phase if not more) coming up with the basic design and its responsiveness since it was my goal to make it accessible. 
                    After all, people don't typically bring their computer with them when they going to watch an ultimate frisbee game.</p>
                </div>
                <div className="phase-two phase">
                    <h3>Phase Two (Scaling It Up)</h3>
                    <p>So, I should point out that whenever you start a project, list down all the things you want from your database, because it might bite you in the ass if you don't later on.
                        I may or may have not got too excited of building my project I forgot to do my planning well. As a result, I hardcode a lot of my data, making it more challenging to scale it up and making it dynamic. </p>
                    <p>I really had a hard time structuring my database at this point, I never had any vast experience working with it except for some basic tutorials but thanks to my instructor and TA, I've managed to got it down.
                     Initially I was planning to customize the application based on the tournament system (Group Stage and Knockut Stage) but due to time restriction, I scale down my application to take in
                     user's input (team,players,match). So my database looks something like this.</p>
                </div>
                <div className="phase-three phase">
                    <h3>Phase Three (User's Input and Deployment)</h3>
                    <p>As the result of scaling my database down, I have to develop the interface so that user can register their team,players and set up their own match. The task seems a lot less daunting now since I had already know what I wanted to put in the database. It's just a matter of connecting the endpoint on the back end with the client side. I picked the most basic but responsive design from Bootstrap to get it up</p>
                    <p>And I got to deploy for the first time ever! This task really put my git skills up to the test and I ran into huge database reconfiguration when deploying which I'll talk about more later on.</p>
                </div>
            </section>
            <section className="how-to-use">
                <h2>This is how it works</h2>
                <div className="in-a-hurry">
                    <p>To get a small sample on how this works follow the steps below</p>
                    <div className="home pic">
                        <p>As you go to the site, this is the home page should look like</p>
                        <img src={HomePic} />
                    </div>
                    <div className="submit pic">
                        <p>To submit score, just click the home score or away score</p>
                        <img src={Submit} />
                    </div>
                    <div className="edit pic">
                        <p>Edit Stats</p>
                        <img src={Edit} />
                    </div>
                    <div className="delete pic">
                        <p>Delete Stats</p>
                        <img src={Delete} />
                    </div>
                    <p>Pretty straight forward right?</p>
                </div>
                <div className="sign-up">
                    <p>To make your own team and set up your own match, you just need to register and then log into the system. The dashboard should look somewhat like this</p>
                    <div className="dashboard image">
                        <img src={Dashboard} />
                    </div>
                    <div className="roster image">
                        <p>Other registrations form are pretty straightforward but team roster can be a little tricky. As you enter the player's detail, when the user click '+' button, that player
                        isn't added to the database yet, it simply being added to the team state to allow for the next players to be added. Once, added the player can be seen on the next table. Click review to proceed with saving the roster.</p>
                        <img src={Roster} />
                    </div>
                </div>
            </section>
            <section className="challenges">
                <h2>Challenges</h2>
                <p>Where should I even begin?? Let's break it down into its own phase</p>
                <div className="challenge-one">
                    <h3>Own Design vs Third Party Library</h3>
                    <p>In this phase, I found myself spending more than half of my time building the style and responsiveness of the application. I blamed mostly trying to debug my own CSS and that made me pretty anxious as I have not develop the logic 
                    for the interface. Initially, I had created my own sliding drawer by using CSS transform:translateY(X%) property and using React state to toggle it. However, by the end I found out, it didn't fully hide the drawer as the user can scroll
                    left or right and render the right drawer visible. At this point, I was already relying heavily on Bootstrap to structure my interface, thanks to my classmate Shadya who introduced me React-Bootstrap library, it saved me so much
                    time in coming up with my own design of a Modal.</p>
                    <p>Now, using a third party library is certainly useful and save you a lot of time, but when later on my other projects, I find it can be quite a headache when 
                    you're trying to override the style of the library. For an example, I really had a hard time trying to alter the size of the modal, and sometimes it doesn't behave the way
                    you're expecting it to. Therefore, debugging becomes even more challenging as you're trying to understand other people's code. I don't really have the right solution to be honest, but I do believe
                    if you have limited resources (time mostly), you sort of have to balance the two and be aware of any update on both the framework and the library you're using.</p>
                </div>
                <div className="challenge-four">
                    <h3>Managing Style</h3>
                    <p>I have to confess, I didn't give it much thoughts when it comes to managing my CSS. All of my projects prior this is small enough that I can fit everything in a single CSS file. Therefore the idea of using CSS preprocessor isn't that appealing to me.As this application grew larger, I found it difficult to keep track of things. So, I broke it up into smaller chunks, my main component Match.js itself has several children components and some of them use their own CSS file.</p>
                    <p>There were times I found some of the CSS files override one another. I don't quite understand why honestly, but since it happened to be that I was using the same class name, I only had to change the name of one of them to fix that.</p>
                </div>
                <div className="challenge-two">
                    <h3>Imperative vs Declarative</h3>
                    <p>When I first learned React, I had no idea what this means. Through this project, I truly understand why React is so hot. So in this application, we have two teams: home team and away team. They both have the same features, submit,edit, delete score. 
                    Logically, you can use the codes(function) to perform those features. That's what declarative way means. You develop codes declaratively(make it non specific) so that it can be re-used by other components. For an example, if I have submitScore function,
                    I don't have to code specifically for home team and away team as they both do the same thing. I just need to run a test to check which team score, and it would save the data in the right table in the database.</p>
                    <p>Unfortunately, this was not the case when I first started the project. Since I didn't have a clear idea of what my database should look like, I just hardcoded every feature imperatively. I only realized this when
                    I was scaling up the application. As I know what to expect of my database, it became clear to me I had too many repatitive codes. Consequently, it took me a little more time to restucture my codes trying to make it declarative.
                    Moral of the story, plan your project well before you start winging it.</p>
                </div>
                <div className="challenge-three">
                    <h3>Database</h3>
                    <p>This shouldn't be a surprise anymore at this point. The original plan was to customize the application to a tournament format. So, PosgreSQL seems like an easy choise because it requires a lot of table relations. I just didn't realize how many tables
                    I have to make with 32 teams playing. Once I realized how much work needed to be done to achieve that and how much time that I had, I had to scale it down to an open application where user can create their own team and match, then start scorekeeping.
                    So in the end, I would only have 4 tables: users, teams, players, and matches</p>
                    <p>I made some interesting(or questionable) decisions when it comes to structuring my database. For an instance, for every match created, it will create a new row that consist of score,home team name, home id, and home statistics, also same with away team. Instead of creating that match individual table, I would just store the statistic within a stringified array of objects. Inside that object, I passed in 3 properties: score, scorer, and assist. As you can imagine, the array would grew larger as the team score and PostgreSQL doesn't like that very much as there is a limit to how much data can you store in a specific column.</p>
                    <p>So whenever I made any type of query regarding the statistics, all of those calls were being made in PUT request as I essentially need to edit that array. I had to parse it, ran a loop to look for that specific data, changed it, stringified it and then store it again. This probably a database cluster***k to a database engineer as this is terrible in terms of performance, but hey, that's how I learned! I'm actually surprised that it actually works</p>
                </div>
            </section>
            <section className="moving-forward">
                <h2>Onwards!</h2>
                <p>Moving forward, I would like to implement some features. Here are some of the ideas that I have</p>
                <div className="future-features">
                    <ul>
                        <li>Users can only access the game and team they created</li>
                        <li>Team has its individual page to review rosters and statistics</li>
                        <li>Tailored it to a tournament format (Original Plan)</li>
                        <li>Only renders the submit, edit, and delete buttons for the creators of the game</li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UltimateScore;