import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NativeSelect, InputLabel, FormControl } from '@material-ui/core';
import useStyles from './styles';
import { getById } from '../../Actions/tracker';
const Results = () => {
  const [puppySelect, setSelected] = useState('');
  //used to get puppy info to render results
  const puppies = useSelector((state) => state.puppies);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (e) => {
    setSelected(e.target.value);
    dispatch(getById(puppySelect));
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='select' className={classes.label}>
          Puppy To Track
        </InputLabel>
        <NativeSelect
          id='select'
          value={puppySelect}
          onChange={handleChange}
          className={classes.select}
        >
          <option aria-label='None' value='' />
          {puppies.map((puppy) => (
            <option key={puppy._id} value={puppy._id}>
              {puppy.name}
            </option>
          ))}
          ;
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default Results;
