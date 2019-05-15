import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  paper: {
    padding: '5px'
  },
  divider: {
    margin: '25px'
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  }

});

const footers = [
  {
    title: 'Contact us',
    description: ['ACELERIT SOFTWARE SOLUTIONS (PTY) LTD', 'Registration Number: 2014/104105/07', '21 San Martino, Pretorius Street', 'Vorna Valley', 'Midrand 1686', 'Mobile Number: 071 872 4639/011 056 6526'],
  }
];

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
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif"
  }
});

function App(props) {
  const { classes } = props;
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
      Values
    </Typography>
    <Grid container spacing={24} justify="flex-start">
    <Grid item md={3}>
    <Card style={styles.card} >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Quality
        </Typography>
        <Typography component="p">
        We are committed to delivering only quality service to our clients with
        passion and determination.
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
          Professionalism
        </Typography>
        <Typography component="p">
        We are devoted to stay professional at all times. Focusing on getting the work done and only carry out constructive criticism and maintenance confidentiality
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
          Integrity
        </Typography>
        <Typography component="p">
        We are committed to transparently, honestly, fairness and consideration in all our dealings
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
          Diversity
        </Typography>
        <Typography component="p">
        We thrive to give equal opportunities to all with no form of discrimination,
        but only on merit, and making sure we respect different opinions and express ours openly and honestly.
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
          Ethics
        </Typography>
        <Typography component="p">
        We will always work with our employees, clients and other stakeholders with good faith dignity and honestly
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
          Innovation
        </Typography>
        <Typography component="p">
        We are committed to encouraging new ideas, research, IT product development, and continuous improvement of our client’s business processes, and stay open for experiments
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </Grid>
    </Grid>
  

      <Divider variant="middle" style={styles.divider}/>
      <Typography color="textSecondary" variant="h5" style={styles.divider}>
      Team
    </Typography>
    </div>
    </Paper>
    {/* Footer */}
    <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
      </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);