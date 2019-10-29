import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter user Details" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </>
      </MuiThemeProvider>
    )
  }
}
