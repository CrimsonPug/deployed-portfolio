import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverExampleSimple extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Find me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Linkedin" href="https://www.linkedin.com/in/ikram-mustapha/" target="blank"/>
            <MenuItem primaryText="Twitter" href="https://twitter.com/IkramTM" target="blank"/>
            <MenuItem primaryText="GitHub" href="https://github.com/CrimsonPug"target="blank" />
            <MenuItem primaryText="Email" href="mailto:ikram.tuan.mustapha@gmail.com" />
          </Menu>
        </Popover>
      </div>
    );
  }
}