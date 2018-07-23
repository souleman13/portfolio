import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {orange, indigo} from '@material-ui/core/colors/'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: 'black',
    },
  },
})

//wraps app with all neccessary higher-order components
function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Component {...props} />
        </Router>
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
