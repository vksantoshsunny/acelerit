import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';


function App() {
  return (
    <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sample
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default App;
