import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import logo from './logo.png'
import './App.css';

const styles = {
  card: {
    maxWidth: 345
  },
  paper: {
    padding: '5px'
  },
  divider: {
    margin: '25px'
  }

};

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#FFFFFF',
    },
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
  const img = <img alt="" style={{marginTop: 10}} src={logo}/>
  return (
    <MuiThemeProvider theme={theme}>
    <AppBar  position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {img}
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper  elevation={1} style={styles.paper}>
      <div style={styles.paper}>
      <Typography color="textSecondary" variant="h5" style={styles.divider}>
      Products
    </Typography>
    <Grid container spacing={24} justify="center">
    <Grid item md={3}>
    <Card style={styles.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Product 1
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </Grid>
    <Grid item md={3}>
    <Card style={styles.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Product 1
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </Grid>
    <Grid item md={3}>
    <Card style={styles.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Product 1
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </Grid>
    </Grid>
  
      <Divider variant="middle" style={styles.divider}/>
      <Typography color="textSecondary" variant="h5" style={styles.divider}>
      Solutions
    </Typography>
      <Divider variant="middle" style={styles.divider}/>
      <Typography color="textSecondary" variant="h5" style={styles.divider}>
      Services
    </Typography>
      <Divider variant="middle" style={styles.divider}/>
      <Typography color="textSecondary" variant="h5" style={styles.divider}>
      Contact
    </Typography>
    </div>
    </Paper>
      </MuiThemeProvider>
  );
}

export default App;
