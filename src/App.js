import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Dashboard from './dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              Diecast Collector
           </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Dashboard />
      </div>
    );
  }
}

export default App;
