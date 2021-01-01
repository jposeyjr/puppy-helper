import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { getPuppies } from '../../Actions/puppy';
import Home from '../Home/Home';
import Tracker from '../Tracker/Tracker';
import useStyles from './styles';
import Results from '../Results/Results';
import Header from '../Header/Header';

const App = () => {
  const [value, setValue] = useState(0);
  //will be used for getting id for updates and deletes
  const [currentId, setCurrentId] = useState(0);
  //credit to mui-treasury.com
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPuppies());
  }, [currentId, dispatch]);
  return (
    <Router>
      <Header />
      <Tabs
        variant={'fullWidth'}
        className={classes.tabStyles}
        aria-label='navigation bar with home, tracker and results tabs'
        value={value}
        onChange={(e, value) => setValue(value)}
      >
        <Tab
          className={classes.tabItemStyles}
          label={'Home'}
          to='/'
          component={Link}
        />
        <Tab
          className={classes.tabItemStyles}
          label={'Results'}
          to='/results'
          component={Link}
        />
      </Tabs>
      <Route exact path='/'>
        <Home currentId={currentId} setCurrentId={setCurrentId} />
      </Route>
      <Route exact path='/tracker'>
        <Tracker currentId={currentId} />
      </Route>
      <Route exact path='/results'>
        <Results />
      </Route>
    </Router>
  );
};

export default App;
