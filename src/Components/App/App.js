import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getPuppies } from '../../Actions/puppy';

import Home from '../Home/Home';
import Tracker from '../Tracker/Tracker';
import Results from '../Results/Results';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
const App = () => {
  //will be used for getting id for updates and deletes
  const [currentId, setCurrentId] = useState(0);
  //credit to mui-treasury.com
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPuppies());
  }, [currentId, dispatch]);
  return (
    <Router>
      <Header />
      <Navbar />
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
