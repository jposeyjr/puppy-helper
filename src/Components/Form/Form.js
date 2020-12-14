import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPuppy, updatePuppy } from '../../Actions/puppy';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [puppyData, SetPuppyData] = useState({
    name: '',
    age: '',
    breed: '',
    weight: '',
    height: '',
    photo: '',
  });
  const puppy = useSelector((state) =>
    currentId ? state.puppies.find((dog) => dog._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (puppy) SetPuppyData(puppy);
  }, [puppy]);

  const clear = () => {
    setCurrentId(0);
    SetPuppyData({
      name: '',
      age: '',
      breed: '',
      weight: '',
      height: '',
      photo: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPuppy(puppyData));
      clear();
    } else {
      dispatch(updatePuppy(currentId, puppyData));
      clear();
    }
  };

  return (
    <div>
      <h1>Form</h1>
    </div>
  );
};

export default Form;
