import Header from '../Header/Header';
import Form from '../Form/Form';
import Puppy from '../Puppy/Puppy';
import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

const Home = (props) => {
  return (
    <Container maxWidth='lg'>
      <Header />
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Form
                currentId={props.currentId}
                setCurrentId={props.setCurrentId}
              />
            </Grid>
            <Grid item xs={12} sm={7} md>
              <Puppy setCurrentId={props.setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
