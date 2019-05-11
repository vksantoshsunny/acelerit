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
import './App.css';

const styles = {
  card: {
    maxWidth: 345
  },
  paper: {
    marginleft : 20
  }
};

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#00cbcc',
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
  return (
    <MuiThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Acelerit
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper  elevation={1} style={styles.paper}>
      <div style={styles.paper}>
      <Typography color="textSecondary" variant="h4">
      Products
    </Typography>
    <Grid container spacing={24}>
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
  
      <Divider variant="middle" />
      <Typography color="textSecondary" variant="h4">
      Solutions
    </Typography>
      <Divider variant="middle" />
      <Typography color="textSecondary" variant="h4">
      Services
    </Typography>
      <Divider variant="middle" />
      <Typography color="textSecondary" variant="h4">
      Contact
    </Typography>
    </div>
    </Paper>
      </MuiThemeProvider>
  );
}

export default App;
