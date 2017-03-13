import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import NavBar from './components/NavBar';
import Work from './components/Work';
import About from './components/About';
import './index.css';


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>   
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/Work" component={Work} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
