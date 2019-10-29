import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem 
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem 
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem 
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem 
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem 
              primaryText="City"
              secondaryText={city}
            />
            <ListItem 
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>
          <br />
          <RaisedButton 
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.previous}
          />
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
};
