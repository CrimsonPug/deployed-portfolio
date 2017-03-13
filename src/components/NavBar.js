import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import './../styles/css/NavBar.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import PopoverExampleSimple from './NavComponents/NavBtn'

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

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      open:false
    }
    this.openDrawer = this.openDrawer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
    this.setState({
      open:false
    })
  }
  openDrawer(){
    console.log('open sesame');
    this.setState({
      open:!this.state.open
    })
  }
  render() {
      return (
          <div className="nav-container">
            <div className="nav-bar">
              <div className="brand">
                <Link to="/">
                  <h2>Ikram <span id="skinny">Mustapha</span></h2>
                </Link>
              </div>
              <div className="btn-container">
              <Link to="/about">
                <RaisedButton label="About" style={styles} />
              </Link>
              <Link to="/work">
                <RaisedButton label="Work" primary={true} style={styles} />
              </Link>
                <PopoverExampleSimple/>
              </div>
              <div className="collapse-container">
                <IconButton
                  iconStyle={styles.mediumIcon}
                  onClick={this.openDrawer}
                  // style={styles.medium}   
                >
                  <NavigationMenu />
                  <Drawer
                    openSecondary={true}
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                  >
                    <Link to="/">
                      <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                    </Link>
                    <Link to="/about">
                      <MenuItem onTouchTap={this.handleClose}>About Me</MenuItem>
                    </Link>
                    <Link to="/work">
                      <MenuItem onTouchTap={this.handleClose}>Work</MenuItem>
                    </Link>
                    <MenuItem onTouchTap={this.handleClose}>Find Me</MenuItem>
                  </Drawer>
                </IconButton>
              </div>
            </div>
              {this.props.children}          
          </div>
      );
    
    
  }
}


export default NavBar;
