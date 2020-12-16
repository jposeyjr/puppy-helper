import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { getPuppies } from './Actions/puppy';
import Home from './Components/Home/Home';
import Tracker from './Components/Tracker/Tracker';

const App = () => {
  //will be used for getting id for updates and deletes
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPuppies());
  }, [currentId, dispatch]);
  return (
    <Router>
      <Route exact path='/'>
        <Home currentId={currentId} setCurrentId={setCurrentId} />
      </Route>
      <Route path='/tracker'>
        <Tracker />
      </Route>
    </Router>
  );
};

export default App;
