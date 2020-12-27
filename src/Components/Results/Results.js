import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NativeSelect, InputLabel, FormControl } from '@material-ui/core';
import { getById } from '../../Actions/tracker';
const Results = () => {
  const [puppySelect, setSelected] = useState('');
  //used to get puppy info to render results
  const puppies = useSelector((state) => state.puppies);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelected(e.target.value);
    dispatch(getById(puppySelect));
  };
  return (
    <>
      <FormControl>
        <InputLabel htmlFor='select'>Puppy To Track</InputLabel>
        <NativeSelect id='select' value={puppySelect} onChange={handleChange}>
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
