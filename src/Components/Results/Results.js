import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NativeSelect, InputLabel } from '@material-ui/core';
const Results = () => {
  const [puppySelect, setSelected] = useState('');
  //used to get puppy info to render results
  const puppies = useSelector((state) => state.puppies);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1>Results</h1>
      <InputLabel htmlFor='select'>Puppy Activity</InputLabel>

      <NativeSelect
        id='select'
        value={puppySelect}
        onChange={handleChange}
        inputProps={{ name: 'activity', id: 'select' }}
      >
        <option aria-label='None' value='' />
        {puppies.map((puppy) => (
          <option value={puppy._id}>{puppy.name}</option>
        ))}
        ;
      </NativeSelect>
    </div>
  );
};

export default Results;
