import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Puppies from './Puppies/Puppies';
import useStyles from './style';

const Puppy = ({ setCurrentId }) => {
  const puppies = useSelector((state) => state.puppies);
  const classes = useStyles();
  return !puppies.length ? (
    <>
      <h1>Please submit a puppy!</h1>
      <CircularProgress />
    </>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={2}
    >
      {puppies.map((puppy) => (
        <Grid key={puppy._id} item xs={12} sm={6} md={4} lg={3}>
          <Puppies puppy={puppy} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Puppy;
