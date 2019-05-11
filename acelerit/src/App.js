import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Acelerit
          </Typography>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
  );
}

export default App;
