import React from 'react';
import useStyles from './styles';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import Header from '../Header/Header';
const Tracker = () => {
  const classes = useStyles();
  return (
    <div className={classes.tracker}>
      <Header />
      <Paper elevation={3} className={classes.paper}>
        <Typography variant='h3'>Potty Tracker</Typography>
        <Typography variant='h6'>Activity Start</Typography>
        <div className={classes.activity}>
          <Button
            variant={'contained'}
            size='large'
            color={'primary'}
            className={classes.margin}
          >
            Food
          </Button>
          <Button
            variant={'contained'}
            size='large'
            color={'primary'}
            className={classes.margin}
          >
            Water
          </Button>
          <Button
            variant={'contained'}
            size='large'
            color={'primary'}
            className={classes.margin}
          >
            Play
          </Button>
          <Button
            variant={'contained'}
            size='large'
            color={'primary'}
            className={classes.margin}
          >
            Nap
          </Button>
        </div>
        <Typography variant='h6'>Potty Achieved</Typography>
        <Button variant={'contained'} size='large' color={'secondary'}>
          Stop Timer
        </Button>
      </Paper>
    </div>
  );
};

export default Tracker;
