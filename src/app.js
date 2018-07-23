import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import TopNav from './components/topNav'
import Router from './router'

const styles = {}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {

    const { classes } = this.props

    return (
      <div>
        <TopNav/>
        <Router/>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))
