import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Puppies from './Puppies/Puppies';
import useStyles from './style';

const Puppy = ({ setCurrentId }) => {
  const puppy = useSelector((state) => state.puppy);
  const classes = useStyles();
  console.log(puppy);
  return !puppy.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {puppy.map((puppy) => (
        <Grid key={puppy._id} item xs={12} sm={6} md={6}>
          <Puppies puppy={puppy} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Puppy;
